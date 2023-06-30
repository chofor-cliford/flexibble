'use client'

import { deleteProject, fetchToken } from '@/lib/actions';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ProjectActions = ({projectId}:{projectId:string}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDeleteProject = async () => {
      setIsDeleting(true);

      const {token} = await fetchToken();

      try {
        await deleteProject(projectId, token);

        router.push('/');
      } catch (error) {
        console.log(error)
      }finally{
        setIsDeleting(false)
      }
    }
  
  return (
    <>
      <Link href={`/edit-project/${projectId}`} className='flexCenter edit-action_btn'>
        <Image src='/edit.svg' alt='edit' width={15} height={15} />
      </Link>

      <button type='button' onClick={handleDeleteProject}>
        <Image src='/trash.svg' alt='delete' width={15} height={15} className={`flexCenter delete-action_btn bg-gray ${isDeleting ? 'bg-gray':'bg-primary-purpule'}`} />
      </button>
    </>
  )
}

export default ProjectActions