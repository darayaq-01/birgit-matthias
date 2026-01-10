<script>
    import { onMount } from "svelte";

    export let videoData = null;

    let isVisible = false;
    let videoContainer;
    let muxPlayerLoaded = false;

    const isMuxPlaybackId =
        videoData?.videoUrl && !videoData.videoUrl.startsWith("https://");
    const playbackId = isMuxPlaybackId ? videoData.videoUrl : null;

    const poster =
        videoData?.thumbnail ||
        (playbackId
            ? `https://image.mux.com/${playbackId}/thumbnail.webp?width=1280`
            : "");

    // Función para cargar el video
    function loadVideo() {
        if (!muxPlayerLoaded) {
            isVisible = true;
            muxPlayerLoaded = true;
            import("@mux/mux-player");
        }
    }

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadVideo();
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" },
        );

        if (videoContainer) {
            observer.observe(videoContainer);
        }

        return () => observer.disconnect();
    });
</script>

<article bind:this={videoContainer}>
    {#if playbackId}
        {#if isVisible}
            <mux-player
                playback-id={playbackId}
                stream-type="on-demand"
                default-hidden-captions="true"
                {poster}
                controls
                preload="none"
                style="aspect-ratio: 16/9; width: 100%;"
                metadata-video-title={videoData.title}
            >
            </mux-player>
        {:else}
            <!-- Placeholder clickeable -->
            <button
                on:click={loadVideo}
                style="
                    aspect-ratio: 16/9;
                    width: 100%;
                    background-image: url({poster});
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                "
                aria-label="Video abspielen"
            >
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="white"
                    style="opacity: 0.9; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"
                >
                    <path d="M8 5v14l11-7z" />
                </svg>
            </button>
        {/if}
    {:else if videoData?.videoUrl}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video
            controls
            {poster}
            preload="none"
            loading="lazy"
            style="aspect-ratio: 16/9; width: 100%;"
        >
            <source src={videoData.videoUrl} type="video/mp4" />
        </video>
    {:else}
        <p>Video nicht verfügbar</p>
    {/if}
</article>
