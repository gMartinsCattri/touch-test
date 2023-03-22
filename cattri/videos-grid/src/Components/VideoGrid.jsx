import React from 'react'
import styles from './VideoGrid.module.css'
function VideoGrid() {
  return (
    <div>
        <div className={styles.VideoGridGeneralContainer}>
        <div className={styles.VideoGridLeftContainer}>
            <iframe className={styles.VideoGridIframe} title={'Video1'} src="http://127.0.0.1.9080/vi/video" frameborder="0"></iframe>
        </div>
        <div className={styles.VideoGridRightContainer}>
            <iframe className={styles.VideoGridIframe} title={'Video2'}  src="http://127.0.0.1.9082/vi/video" frameborder="0"></iframe>
        </div>
        </div>
        <div className={styles.VideoGridThirdContainer}>
            <iframe className={styles.VideoGridIframe} title={'Video3'}  src="http://127.0.0.1.9086/vi/video" frameborder="0"></iframe>
        </div>
    </div>
  )
}

export default VideoGrid