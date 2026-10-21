import React,{useState} from 'react';
export default function ImagePlaceholder({title,subtitle='Foto em breve',aspectRatio='4 / 3',className='',imageSrc}) {
 const [failed,setFailed]=useState(null);
 return <div className={'image-placeholder '+className} style={{aspectRatio}}>{imageSrc && failed!==imageSrc ? <img src={imageSrc} alt={title} loading="lazy" onError={()=>setFailed(imageSrc)}/> : <div className="placeholder-inner"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M3 7h5l2-3h4l2 3h5v13H3z"/><circle cx="12" cy="13" r="4"/></svg><span>{title}</span><small>{subtitle}</small></div>}</div>
}

