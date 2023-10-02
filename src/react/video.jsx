// import LazyLoad from 'react-lazyload'

const containerStyle = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  width: '100%',
}

const iframeStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

export const ResponsiveVideo = ({ src }) => {
  return (
    // <LazyLoad
    //   once={true}
    //   offset={100}
    //   className={'h-full w-full large:max-w-[600px]'}
    // >
    <div style={containerStyle}>
      <iframe
        src={src}
        frameBorder="0"
        title="How to trooper video"
        allowFullScreen
        style={iframeStyle}
      ></iframe>
    </div>
    // </LazyLoad>
  )
}
