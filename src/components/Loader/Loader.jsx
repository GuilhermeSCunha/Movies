import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => ( 
    <ContentLoader 
    speed={2}
    width={769}
    height={700}
    viewBox="0 0 769 700"
    backgroundColor= "#dadada"
    foregroundColor="#7c7b7b"
    {...props}
  >
    <rect x="289" y="34" rx="3" ry="3" width="88" height="6" /> 
    <rect x="502" y="38" rx="3" ry="3" width="52" height="6" /> 
    <rect x="73" y="387" rx="3" ry="3" width="410" height="6" /> 
    <rect x="73" y="398" rx="3" ry="3" width="380" height="6" /> 
    <rect x="54" y="28" rx="0" ry="0" width="209" height="302" /> 
    <rect x="75" y="430" rx="3" ry="3" width="410" height="6" /> 
    <rect x="74" y="442" rx="3" ry="3" width="380" height="6" /> 
    <rect x="74" y="372" rx="3" ry="3" width="186" height="8" /> 
    <rect x="76" y="413" rx="3" ry="3" width="186" height="8" /> 
    <rect x="290" y="51" rx="3" ry="3" width="185" height="5" /> 
    <rect x="291" y="66" rx="3" ry="3" width="168" height="5" /> 
    <rect x="291" y="76" rx="3" ry="3" width="192" height="5" /> 
    <rect x="290" y="86" rx="3" ry="3" width="172" height="5" /> 
    <rect x="293" y="96" rx="3" ry="3" width="155" height="4" /> 
    <rect x="501" y="53" rx="3" ry="3" width="88" height="5" /> 
    <rect x="502" y="65" rx="3" ry="3" width="76" height="4" /> 
    <rect x="503" y="76" rx="3" ry="3" width="66" height="4" />
  </ContentLoader>
)


export default Loader