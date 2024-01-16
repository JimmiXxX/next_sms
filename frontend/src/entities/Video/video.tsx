import styles from "../../shared/ui/MainPage/video/video.module.scss"

export const Video = () => {

    return (
      <div className={styles.video_content}>
          <iframe
              src="https://www.youtube.com/embed/vPVAYsc-U60?si=UXGv-ztsTVtADX0c"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              width={1160}
              height={630}
          ></iframe>
      </div>
    )
}