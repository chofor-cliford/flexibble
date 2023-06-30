'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {categoryFilters} from '@/constant';

const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const handleTags = (filter:string) => {
      router.push(`${pathName}?category=${filter}`)
    }

    const category = searchParams.get('category')

  return (
    <div className='flexBetween w-full gap-5 flex-wrap'>
        <ul className='flex gap-2 overflow-auto'>
            {categoryFilters.map((filter) => (
                <button type='button' key={filter} className={`${category === filter? 'bg-light-white-300 font-medium': 'font-normal'} px-4 py-3 rounded-lg capitalize whitespace-nowrap`} onClick={() => handleTags(filter)}></button>
            ))}
        </ul>
    </div>
  )
}

export default Categories