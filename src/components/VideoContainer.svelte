<script>
  import '@mux/mux-player'; // Importa el componente web
  export let videoData = null;

  // Identifica si es un playback ID de Mux o URL externa
  const isMuxPlaybackId = videoData?.videoUrl && !videoData.videoUrl.startsWith('https://');
  const playbackId = isMuxPlaybackId ? videoData.videoUrl : null;
  
  // Miniaturas (prioriza la personalizada)
  const poster = videoData?.thumbnail || 
                 (playbackId ? `https://image.mux.com/${playbackId}/thumbnail.jpg` : '');
</script>

<article>
  {#if playbackId}
    <mux-player
      playback-id={playbackId}
      stream-type="on-demand"
      {poster}
      controls
      preload="metadata"
      style="aspect-ratio: 16/9; width: 100%;"
      metadata-video-title={videoData.title}
    >
    </mux-player>
  {:else if videoData?.videoUrl}
    <!-- Fallback para URLs externas -->
       <!-- svelte-ignore a11y-media-has-caption -->
    <video
      controls
      poster={poster}
      style="aspect-ratio: 16/9; width: 100%;"
    >
      <source src={videoData.videoUrl} type="video/mp4" />
    </video>
  {:else}
    <p>Video nicht verfügbar</p>
  {/if}
</article>