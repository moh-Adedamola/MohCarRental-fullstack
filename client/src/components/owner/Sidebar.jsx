import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { assets, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const Sidebar = () => {
    
    const {user, axios, fetchUser} = useAppContext()
    const location = useLocation()
    const [image, setImage] = useState('')
    
    const updateImage = async ()=>{
        try {
            const formData = new FormData()
            formData.append('image', image)
            
            const {data} = await axios.post('/api/owner/update-image', formData)
            
            if(data.success){
                fetchUser()
                toast.success(data.message)
                setImage('')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

   return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60
    w-full border-r border-borderColor text-sm'>
        
        <div className='relative group'>
            <label htmlFor="image" className='cursor-pointer'>
                {(image || user?.image) ? (
                    <img 
                        src={image ? URL.createObjectURL(image) : user?.image} 
                        alt="Profile" 
                        className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto object-cover' 
                    />
                ) : (
                    <div className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto bg-gray-200 flex items-center justify-center'>
                        <svg 
                            className='h-5 md:h-7 w-5 md:w-7 text-gray-400' 
                            fill='currentColor' 
                            viewBox='0 0 24 24'
                        >
                            <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/>
                        </svg>
                    </div>
                )}
                <input 
                    type="file" 
                    id='image' 
                    accept="image/*" 
                    hidden 
                    onChange={e=>setImage(e.target.files[0])} 
                />
                
                <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full
                opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity'>
                    <img src={assets.edit_icon} alt="Edit" />
                </div>
            </label>
        </div>
        
        {image && (
            <button 
                className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary
                cursor-pointer rounded' 
                onClick={updateImage}
            >
                Save <img src={assets.check_icon} width={13} alt="" />
            </button>
        )}
        
        <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>
        
        <div className='w-full'>
            {ownerMenuLinks.map((link, index)=>(
                <NavLink 
                    key={index} 
                    to={link.path} 
                    className={`relative flex items-center gap-2 w-full
                    py-3 pl-4 first:mt-6 ${link.path === location.pathname ? 'bg-primary/10 text-primary' :
                     'text-gray-600'}`}
                >
                    <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="menu icon" />
                    <span className='max-md:hidden'>{link.name}</span>
                    <div className={`${link.path === location.pathname && 'bg-primary'} w-1.5 h-8 rounded-1 right-0 absolute`}>
                     </div>
                </NavLink>
            ))}
        </div>
     
    </div>
  )
}

export default Sidebar