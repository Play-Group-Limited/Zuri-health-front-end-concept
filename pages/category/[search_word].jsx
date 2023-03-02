import { Breadcrumb } from 'antd'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'
import { RiArrowDropRightLine } from 'react-icons/ri'
import DrugList from '../../components/Categories/DrugList'
import CategoryList from '../../components/Pharmacy/CategoryList'
import CategoryListMobile from '../../components/Pharmacy/CategoryListMobile'
import TalkToDoc from '../../components/Pharmacy/TalkToDoc'
import Search from '../../components/Search/Search'
import { API_URL } from '../../config/api.config'

const CategorySearch = ({products, categories}) => {

    const [open, setOpen] = useState(false)
    console.log("first***", products)
    const [activeCategory, setActiveCategory] = useState("all")
    const [activeSubCategory, setActiveSubCategory] = useState("")   

    const router = useRouter();

    const pathSegments = router.asPath.split("/");

    const breadcrumbItems = pathSegments.map((segment, index) => {
        const path = `${pathSegments.slice(0, index + 1)}`;
        return { name: "home", path };
    });



  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='bg-[#5BDADD] w-full px-4  py-8 flex items-center justify-center'>
            <div className='w-[1440px]'>
                <Breadcrumb>
                    {breadcrumbItems.map(({ name, path }, index) => (
                        <Breadcrumb.Item key={index}>
                        <Link href={path}>
                            <p>{name}</p>
                        </Link>
                        </Breadcrumb.Item>
                    ))}
                <Breadcrumb.Item>{pathSegments[pathSegments.length - 1]}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
        <div className='max-w-[1440px] mx-2 md:ml-4 flex flex-col items-center justify-center'>

            {/* <div>
                <CategoryListMobile />
            </div> */}
            
            {/* category list */}
            <div className='flex flex-col md:flex-row my-8 mx-4 md:mx-0 justify-center'>
                <div className='hidden md:flex flex-col border-r'>
                    <h2 className='uppercase font-bold text-2xl pb-8'>Categories</h2>

                    {categories.length > 0 && categories.map((category) => (
                        <div key={category._id} className='mr-4'>
                            <div className='flex flex-row items-center cursor-pointer' onClick={() => setActiveCategory(category.name)}>
                                <BsArrowRight className='cursor-pointer mr-4'/>
                                <h3 className='mb-2 font-light whitespace-nowrap'>
                                {category.name}
                                </h3>
                            </div>
                            <hr  className='my-4'/>
                            {activeCategory === category.name ? (
                                <div className='w-full pl-2 my-4'>
                                {category?.sub_categories?.length > 0 && category?.sub_categories?.map((sub) => (
                                    <div key={sub._id}>
                                        <div className='flex flex-row mb-2'  onClick={() => setActiveSubCategory(sub.name)}>
                                            <RiArrowDropRightLine size={20} className='cursor-pointer'/>
                                            <p className='font-thin'>{sub.name}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            ) : null}
                        </div>
                      ))}
                </div> 

                <div className='md:hidden flex flex-col w-full h-full overflow-x-auto'>
                    <h3 className='text-xl mb-4 font-bold'>Categories</h3>
                        {/* <CategoryListMobile /> */}


                    <div onClick={() => setOpen(prev => !prev)} className={`flex flex-row items-center justify-between bg-slate-200 border-2 rounded-lg p-4 mb-4 ${open ? "mb-0 rounded-b-none" : null}`}>
                        <p className='uppercase font-semibold'> View All Categories</p>
                        <HiChevronDown />
                    </div>
                    
                    {open ? (
                        <div className='bg-slate-200 border-2 rounded-b-lg p-4 mb-4'>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Family Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Fitness &amp; Wellness</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Skin Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Hair Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Lip Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Sexual wellness</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className=''>Women&apos;s Care</p>
                            </div>
                            <hr  className='my-4'/>
                            <div className='flex flex-row items-center'>
                                <BsArrowRight className='mr-4'/>
                                <p className='whitespace-nowrap pr-4'>Baby Care</p>
                            </div>
                        </div>
                    ) : null}


                </div>

                <hr className='my-2 md:hidden mb-4'/>

                

                <div className='w-full flex md:ml-8 flex-col justify-center md:justify-start'>
                    <div className='mx-4 mb-8 hidden md:block'>
                        <Search />
                    </div>

                    { products.length > 0 ? (
                        <DrugList products={products} />
                    ) : (
                        
                        <div className='w-full h-full min-w-[60vw]'>
                            <div className='flex flex-col text-center items-center justify-center'>
                                <h3 className='text-3xl font-bold underline my-4'>Oh No ...</h3>
                                <p>
                                    Sorry, we currently dont not have the products you are looking 
                                    <br />
                                    for here but please reach out to us on whatsapp so that we can sort you out
                                </p>
                            </div>
                        </div>

                    )}
                </div>

            </div>
            <div className='flex flex-col md:flex-row '>
                <div className='w-full  relative mr-2 my-2 '>
                    <Image src='/assets/stockImgs/categories/bg.png' width="10000" height={20} alt='Wellness Package' className='object-cover min-h-[240px] md:min-h- w-full rounded-xl h-full'/>
                    <div className='absolute bottom-4 p-4  '>
                        <h3 className='text-sm  text-white'>
                            <span className='font-bold'>Download our app |</span>  A world of possibilties awaits
                        </h3>
                    </div>
                </div>
                <TalkToDoc />
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
    const res = await axios.get(
      `${API_URL}/pharmacy/pharmacy_product_list?page=1&search_word=${context.query.search_word}`
    )
    let categories = await (
      await axios.get(`${API_URL}/pharmacy_category/category_list`)
    ).data.pharmacy_categories
    const subcategories = await (
      await axios.get(`${API_URL}/pharmacy_sub_category/sub_category_list`)
    ).data.pharmacy_sub_categories
  
    // console.log("SUB CATEGORIES", categories)
    console.log("••••••••• ", context.query.search_word)
    console.log("••••••••• ", res.data)
  
    if (categories.length > 0 && subcategories.length > 0) {
      const data = categories?.map((category) => {
        return {
          ...category,
          sub_category: subcategories?.filter(
            (item) => item.category_id === category._id
          ),
        }
      })
      categories = data
    }
    ;[]
  
    // const data = await res.json();
  
    return {
      props: {
        products: res.data.pharmacy_products,
        categories: categories,
      },
    }
  }

export default CategorySearch