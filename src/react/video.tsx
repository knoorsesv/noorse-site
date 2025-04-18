import type { FC, HTMLProps } from 'react'
import LazyLoad from 'react-lazy-load'

const containerStyle: HTMLProps<HTMLDivElement>['style'] = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  width: '100%',
}

const iframeStyle: HTMLProps<HTMLIFrameElement>['style'] = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

export const ResponsiveVideo: FC<{ src: string }> = ({ src }) => {
  return (
    <LazyLoad offset={100} className={'h-full w-full large:max-w-[600px]'}>
      <div style={containerStyle}>
        <iframe
          src={src}
          loading="lazy"
          title="How to trooper video"
          allowFullScreen
          style={iframeStyle}
        ></iframe>
      </div>
    </LazyLoad>
  )
}
