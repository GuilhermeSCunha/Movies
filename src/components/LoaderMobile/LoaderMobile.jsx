import React from "react"
import ContentLoader from "react-content-loader"

const LoaderMobile = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={1000}
    viewBox="0 320 1000"
    backgroundColor= "#dadada"
    foregroundColor="#7c7b7b"
    {...props}
  >
     <rect x="8" y="527" rx="3" ry="3" width="290" height="6" /> 
    <rect x="10" y="26" rx="0" ry="0" width="300" height="450" /> 
    <rect x="59" y="505" rx="3" ry="3" width="186" height="8" /> 
    <rect x="8" y="536" rx="3" ry="3" width="280" height="6" /> 
    <rect x="6" y="570" rx="3" ry="3" width="290" height="6" /> 
    <rect x="57" y="548" rx="3" ry="3" width="186" height="8" /> 
    <rect x="6" y="579" rx="3" ry="3" width="280" height="6" />
  </ContentLoader>
)

export default LoaderMobile;

