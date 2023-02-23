import React, { useEffect, useState } from "react"
import { MdLocationOn } from "react-icons/md"
import { TbAdjustmentsHorizontal } from "react-icons/tb"
import { BsArrowDown, BsArrowDownUp, BsArrowRight } from "react-icons/bs"
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri"
import DrugCard from "../../components/Pharmacy/DrugCard"
import DrugList from "../../components/Categories/DrugList"
// import DrugListSm from "../../components/pharmacy/DrugListSm 2"
import axios from "axios"
import { API_URL } from "../../config/api.config"
import { HiChevronDown } from 'react-icons/hi'
import Search from '../../components/Search/Search'
import TalkToDoc from '../../components/Pharmacy/TalkToDoc'



const Category = ({ products, categories }) => {
    console.log('categories: ',categories)

    const [open, setOpen] = useState(false)
    console.log("first***", products)

    const [dropDownFamilyCare, setDropDownFamilyCare] = useState(false);
    const [dropDownSexualHealth, setDropDownSexualHealth] = useState(false);
    const [dropDownFitnessWellnes, setDropDownFitnessWellnes] = useState(false);
    const [dropDownSkinCare, setDropDownSkinCare] = useState(false);
    const [dropDownHairCare, setDropDownHairCare] = useState(
        false
    );
    const [dropDownLipCare, setDropDownLipCare] = useState(false);
    const [dropDownWomenCare, setDropDownWomenCare] = useState(false);
    const [dropDownBabyCare, setDropDownBabyCare] = useState(false);

    const [handleFitnessWellnessDisplay, setHandleFitnessWellnessDisplay] = useState([]);
    const [handleSexualHealthDisplay, setHandleSexualHealthDisplay] = useState(
        []
    );
    const [handleSkinCareDisplay, setHandleSkinCareDisplay] = useState([]);
    const [handleHairCareDisplay, setHandleHairCareDisplay] = useState([]);
    const [handleLipCareDisplay, setHandleLipCareDisplay] = useState([]);
    const [handleWomenCareDisplay, setHandleWomenCareDisplay] = useState([]);
    const [handleBabyCareDisplay, setHandleBabyCareDisplay] = useState([]);
    const [handleFamilyCareDisplay, setHandleFamilyCareDisplay] = useState([]);

    function handleFamilyCare() {
        setDropDownFamilyCare(!dropDownFamilyCare);
        return categories
            .filter((el, index) => el.name === "Family Care")
            .map((el, index) =>
                el.sub_categories ? setHandleFamilyCareDisplay(el.sub_categories) : null
            );
    }
    function handleFitnessWellness() {
        setDropDownFitnessWellnes(!dropDownFitnessWellnes);
        return categories
            .filter((el, index) => el.name === "Fitness & Wellness")
            .map((el, index) =>
                el.sub_categories ? setHandleFitnessWellnessDisplay(el.sub_categories) : null
            );
    }
    function handleSkinCare() {
        setDropDownSkinCare(!dropDownSkinCare);
        return categories
            .filter((el, index) => el.name === "Skin Care")
            .map((el, index) =>
                el.sub_categories ? setHandleSkinCareDisplay(el.sub_categories) : null
            );
    }
    function handleHairCare() {
        setDropDownHairCare(!dropDownHairCare);
        return categories
            .filter((el, index) => el.name === "Hair Care")
            .map((el, index) =>
                el.sub_categories ? setHandleHairCareDisplay(el.sub_categories) : null
            );
    }
    function handleLipCare() {
        setDropDownLipCare(!dropDownLipCare);
        return categories
            .filter((el, index) => el.name === "Lip Care")
            .map((el, index) =>
                el.sub_categories ? setHandleLipCareDisplay(el.sub_categories) : null
            );
    }
    function handleWomenCare() {
        setDropDownWomenCare(!dropDownWomenCare);
        return categories
            .filter((el, index) => el.name === "Women's Care")
            .map((el, index) =>
                el.sub_categories ? setHandleWomenCareDisplay(el.sub_categories) : null
            );
    }
    function handleBabyCare() {
        setDropDownBabyCare(!dropDownBabyCare);
        return categories
            .filter((el, index) => el.name === "Baby Care")
            .map((el, index) =>
                el.sub_categories ? setHandleBabyCareDisplay(el.sub_categories) : null
            );
    }
    function handleSexualHealth() {
        setDropDownSexualHealth(!dropDownSexualHealth);
        return categories
            .filter((el, index) => el.name === "sexual health")
            .map((el, index) =>
                el.sub_categories
                    ? setHandleSexualHealthDisplay(el.sub_categories)
                    : null
            );
    }
    function handleEyeCare() {
        setDropDownFitnessWellnes(!dropDownFitnessWellnes);
        return categories
            .filter((el, index) => el.name === "eye/ear care")
            .map((el, index) =>
                el.sub_categories ? setHandleEarEyeCareDisplay(el.sub_categories) : null
            );
    }
    function handleDietNutrition() {
        setDropDownSkinCare(!dropDownSkinCare);
        return categories
            .filter((el, index) => el.name === "diet nutrition")
            .map((el, index) =>
                el.sub_categories ? setHandleDietNutritionDisplay(el.sub_categories) : null
            );
    }
    function handlePainRelief1() {
        setDropDownHairCare(!dropDownHairCare);
        return categories
            .filter((el, index) => el.name === "pain relief1")
            .map((el, index) =>
                el.sub_categories ? setHandleFamilyCare(el.sub_categories) : null
            );
    }
    function handleForKids() {
        setDropDownLipCare(!dropDownLipCare);
        return categories
            .filter((el, index) => el.name === "for kids")
            .map((el, index) =>
                el.sub_categories ? setHandleForKidsDisplay(el.sub_categories) : null
            );
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='bg-[#5BDADD] w-full px-4  py-8 flex items-center justify-center'>
                <div className='w-[75%]'>
                    <p>home</p>
                </div>
            </div>
            <div className='max-w-[1440px] mx-4 md:ml-4 flex flex-col items-center justify-center'>

                {/* <div>
                <CategoryListMobile />
            </div> */}
                {/* category list */}
                <div className='flex flex-col md:flex-row my-8 mx-12 md:mx-0 justify-center'>
                    <div className='hidden md:flex flex-col border-r'>
                        <h2 className='uppercase font-bold text-2xl pb-8'>Categories</h2>

                        <div className='mr-4'>
                            <hr className='my-4' />
                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleFamilyCare()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Family Care</p>
                            </div>
                            {handleFamilyCareDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownFamilyCare && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}
                            <hr className='my-4' />
                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleFitnessWellness()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Fitness &amp; Wellness</p>
                            </div>
                            <hr className='my-4' />
                            {handleFitnessWellnessDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownFitnessWellnes && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleSkinCare()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Skin Care</p>
                            </div>
                            <hr className='my-4' />
                            {handleSkinCareDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownSkinCare && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleHairCare()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Hair Care</p>
                            </div>
                            <hr className='my-4' />
                            {handleHairCareDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownHairCare && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleLipCare()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Lip Care</p>
                            </div>
                            <hr className='my-4' />
                            {handleLipCareDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownLipCare && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleSexualHealth()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Sexual wellness</p>
                            </div>
                            {handleSexualHealthDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownSexualHealth && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}
                            <hr className='my-4' />

                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleWomenCare()}>
                                <BsArrowRight className='mr-4' />
                                <p className=''>Women&apos;s Care</p>
                            </div>
                            <hr className='my-4' />
                               {handleWomenCareDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownWomenCare && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className='flex flex-row items-center cursor-pointer' onClick={() => handleBabyCare()}>
                                <BsArrowRight className='mr-4' />
                                <p className='whitespace-nowrap pr-4'>Baby Care</p>
                            </div>
                               {handleBabyCareDisplay.map((el, index) => (
                                <div key={index}>
                                    {dropDownBabyCare && (
                                        <ul className="flex flex-col items-center">
                                            <li>-{el.name}</li>
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
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
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Family Care</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Fitness &amp; Wellness</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Skin Care</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Hair Care</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Lip Care</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Sexual wellness</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className=''>Women&apos;s Care</p>
                                </div>
                                <hr className='my-4' />
                                <div className='flex flex-row items-center'>
                                    <BsArrowRight className='mr-4' />
                                    <p className='whitespace-nowrap pr-4'>Baby Care</p>
                                </div>
                            </div>
                        ) : null}


                    </div>

                    <hr className='my-2 md:hidden mb-4' />



                    <div className='w-full flex md:ml-8 flex-col justify-center md:justify-start'>
                        <div className='mx-4 mb-8 hidden md:block'>
                            <Search />
                        </div>

                        <DrugList products={products} />
                    </div>

                </div>
                <div className='flex flex-row'>
                    <TalkToDoc />
                    <TalkToDoc />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await axios.get(`${API_URL}/pharmacy/pharmacy_product_list?page=1&search_word=${context.query.search_word}`);

    let categories = await (
        await axios.get(`${API_URL}/pharmacy_category/category_list`)).data.pharmacy_categories

    const subcategories = await (
        await axios.get(`${API_URL}/pharmacy_sub_category/sub_category_list`)
    ).data.pharmacy_sub_categories

    console.log("SUB CATEGORIES", categories)

    if (categories.length > 0 && subcategories.length > 0) {
        const data = categories?.map((category) => {
            return {
                ...category,
                sub_category: subcategories?.filter(
                    (item) => item.category_id === category._id
                ),
            }
        })

        console.log('are you mad', data)
        categories = data
    }
    ;[]

    return {
        props: {
            products: res.data,
            categories: categories,
        },
    }
}

export default Category
