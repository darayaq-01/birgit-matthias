<script>
  import { VideoPlayer } from '@datocms/svelte';
  
  export let videoData = null; // Mejor nombre descriptivo
  </script>
  
  <article>
      {#if videoData?.videoSection?.videoArtist?.video}
          <VideoPlayer 
              data={videoData.videoSection.videoArtist.video}
              playbackId={videoData.videoSection.videoArtist.video.muxPlaybackId} 
              streamingUrl={videoData.videoSection.videoArtist.video.streamingUrl}
          />
      {:else}
          <p>Video no available</p>
      {/if}
  </article>