import Image from "next/image"
import React, { useEffect, useState } from "react"
import logo from "../public/assets/logo.svg"
import flag from "../public/assets/flags/england.png"
import { BsGlobe } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import { MdOutlineShoppingCart } from "react-icons/md"
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx"
import Link from "next/link"
import { useRouter } from "next/router"
import Badge from "@mui/material/Badge"
import { useSelector } from "react-redux"
import { DownOutlined, SmileOutlined } from "@ant-design/icons"
import { Drawer, Dropdown, Space } from "antd"

import account from "../public/assets/icons/Navbar/account.png"
import wish from "../public/assets/icons/Navbar/wish.png"
import cartPic from "../public/assets/icons/Navbar/cart.png"
import Links from "./Links"

import kenya from "../public/assets/flags/kenya.svg"
import nigeria from "../public/assets/flags/nigeria.svg"
import sa from "../public/assets/flags/sa.svg"
import ghana from "../public/assets/flags/ghana.svg"
import eng from "../public/assets/flags/eng.svg"

import WishCard from "./wishlist/WishCard"
import { toast } from "react-toastify"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrop, setOpenDrop] = useState(false)

  const router = useRouter()
  // console.log(router.route === item.name ? "page" : undefined)

  const cart = useSelector((state) => state.cart)
  const labCart = useSelector((state) => state.labCart)
  const wishlist = useSelector((state) => state.wishlist)
  let totalQuantity = labCart.quantity + cart.quantity


  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(`Route changed to: ${url}`)
      // Do something when the route changes
      setOpenMenu(false)
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  const flags = [
    {
      key: "1",
      label: (
        <a
          href=''
          onClick={() => setLang("ENG")}
          className='flex items-center '>
          <Image src={eng} alt='Eng' />
          <p className='ml-2'>English</p>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          href=''
          onClick={() => setLang("EBO")}
          className='flex items-center '>
          <Image src={nigeria} alt='Nigeria' />
          <p className='ml-2'>Ebo</p>
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          href=''
          onClick={() => setLang("GHA")}
          className='flex items-center '>
          <Image src={ghana} alt='Ghana' />
          <p className='ml-2'>Ghanaian</p>
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          href=''
          onClick={() => setLang("KIS")}
          className='flex items-center '>
          <Image src={kenya} alt='Kenya' />
          <p className='ml-2'>Swahili</p>
        </a>
      ),
    },
  ]

  const [lang, setLang] = useState("ENG")

  const items = [
    {
      key: "1",
      label: (
        <a className='flex items-center justify-center'>
          <Image src={sa} alt='South Africa' className='' />
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href='' className='flex items-center justify-center'>
          <Image src={nigeria} alt='Ni' />
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a href='' className='flex items-center justify-center'>
          <Image src={ghana} alt='Gh' />
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a href='' className='flex items-center justify-center'>
          <Image src={kenya} alt='Ke' />
        </a>
      ),
    },
  ]
  const pharmacy = [
    {
      key: "1",
      label: (
        <Link href='/Pharmacy' className='flex p-2'>
            Find Medicine Fast
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href='/Prescription' className='flex p-2'>
            Upload Prescription
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href='/Categories' className='flex p-2'>
            Popular items
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link href='/Categories' className='flex p-2'>
            Various Categories
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link href='/ContinuosCare' className='flex p-2'>
            Continuous Care
        </Link>
      ),
    },
  ]

  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  let item

  const [data, setData] = useState(item)
  // console.log("..................", data)

  const stuff = [
  {
    label: <Link href='/Cart'>Pharmacy Cart</Link>,
    key: '0',
  },
  {
    label: <Link href='/LabCart'>Labs Cart</Link>,
    key: '1',
  },

];

  const handleClick = () => {}

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col w-full'>
        <div className='bg-black md:py-4 w-full h-full flex justify-center items-center  md:pr-0'>
          <div className=' flex flex-row justify-center md:justify-end md:items-end w-full max-w-[1440px] lg:pr-4'>
            <Link href='/Coparate'>
              <p className='text-white mx-2 text-sm hidden md:block whitespace-nowrap'>
                Corparate Services
              </p>
            </Link>
            <Link href='/Partner'>
              <p className='text-white mx-2 text-sm hidden md:block whitespace-nowrap'>
                Become a Partner
              </p>
            </Link>
            <Dropdown
              menu={{
                items,
              }}
              className='flex items-center justify-center text-center cursor-pointer'
              onClick={(e) => e.preventDefault()}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className='md:flex flex-row items-center text-white mx-2 text-sm hidden  whitespace-nowrap'>
                  Country Selector
                  <BsGlobe />
                </Space>
              </a>
            </Dropdown>
            {/* sm screen */}
            <span className='flex flex-row  items-center mx-8 md:hidden bg-black w-full justify-center z-50 py-2 fixed'>
              <Space className='flex-row text-white mx-2 text-sm   whitespace-nowrap'>
                <p className='text-white'>{lang}</p>
              </Space>
              <Link href='/Login/Login'>
                <Image src={account} alt='account' className='mx-2  ' />
              </Link>
              <div onClick={showDrawer} className='cursor-pointer'>
                <Image src={wish} alt='WishList' className='mx-2 ' />
              </div>
              {router.route == "/Labs" ? (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='flex-row items-center text-white mx-2 text-sm   whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
              ) : router.route == "/TestCategories" ? (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className=' flex-row items-center text-white mx-2 text-sm   whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
              ) : router.route == "/Test/[id]" ? (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className=' flex-row items-center text-white mx-2 text-sm   whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
              ) : (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='flex-row items-center text-white mx-2 text-sm  whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
                

              )}

              <Space className=' ml-6 flex-row items-center text-white text-sm   whitespace-nowrap'>
                <BsGlobe size={20} />
              </Space>
            </span>
            <Dropdown
              menu={{
                items: flags,
              }}
              className='flex items-center justify-center text-center cursor-pointer'>
              <a onClick={(e) => e.preventDefault()}>
                <Space className='md:flex flex-row text-white mx-2 text-sm hidden  whitespace-nowrap'>
                  {lang}
                  <Image src={flag} alt='flag' className='hidden md:flex ' />
                </Space>
              </a>
            </Dropdown>
            {/* lg screen */}
            <span className='md:flex flex-row items-center ml-8 hidden pr-4'>
              <Link href='/Login/Login'>
                <Image src={account} alt='account' className='mx-2  ' />
              </Link>
              <div onClick={showDrawer} className='cursor-pointer'>
                <Image src={wish} alt='WishList' className='mx-2 ' />
              </div>
              {router.route == "/Labs" ? (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='md:flex flex-row items-center text-white mx-2 text-sm hidden  whitespace-nowrap'>
                      <Badge
                        badgeContent={labCart.quantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
              ) : router.route == "/TestCategories" ? (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='md:flex flex-row items-center text-white mx-2 text-sm hidden  whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
              ) : router.route == "/Test/[id]" ? (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='md:flex flex-row items-center text-white mx-2 text-sm hidden  whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
              ) : (
              <Dropdown
                menu={{
                  items:stuff,
                }}
                className='flex items-center justify-center text-center cursor-pointer'
                onClick={(e) => e.preventDefault()}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className='md:flex flex-row items-center text-white mx-2 text-sm hidden  whitespace-nowrap'>
                      <Badge
                        badgeContent={totalQuantity}
                        color='warning'
                        className=''>
                        <Image
                          src={cartPic}
                          alt='Cart'
                          className='mx-2 animate-none '
                        />
                      </Badge>
                  </Space>
                </a>
              </Dropdown>
                

              )}
            </span>
            <Drawer
              title='Wish List'
              placement='right'
              onClose={onClose}
              open={open}
              className='overflow-y-auto'>
              {wishlist?.wishlistItems?.length <= 0 ? <p className="flex h-full w-full items-center justify-center">There are no items in your wishlist</p> : null}
              {wishlist?.wishlistItems?.length > 0 &&
                wishlist?.wishlistItems.map((product) => {
                  return <WishCard key={product._id} product={product} />
                })}
            </Drawer>
            
          </div>
        </div>
        {openMenu ? (
          <div className=' w-full h-full top-0 bottom-0 overflow-y-auto fixed left-0 right-0 z-50 md:h-screen bg-white'>
            <div className=' mx-4 xl:mx-60 my-12'>
              <div className=''>
                <hr className='my-8' />
                <div className='flex flex-row items-center justify-between'>
                  <Link href='/'>
                    <Image src={logo} alt='logo' className='hidden md:block' />
                    <Image
                      src={logo}
                      alt='logo'
                      width={50}
                      height={40}
                      className='md:hidden'
                    />
                  </Link>
                  <RxCrossCircled
                    size={40}
                    onClick={() => setOpenMenu(false)}
                    className='mr-4 hover hover:text-[#5cdadc] transition-all duration-150 ease-linear cursor-pointer'
                  />
                </div>
                <hr className='my-8' />
              </div>

              <div className='flex flex-col-reverse md:flex-row justify-between'>
                <div className='flex flex-col'>
                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}
                    <Link href='/Doctors'>
                      <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                        <p className='mx-2'>Engage with doctors</p>
                        <RiArrowDropDownLine />
                        <span className='py-4 border-b border-[#00F9ED]' />
                      </div>
                    </Link>
                    {/* list */}
                    <div className='my-4 mx-2'>
                      <Link href='/Doctors'>
                        <Links>Find a doctor</Links>
                        <Links>Video Consultation</Links>
                        <Links>Book a home vist</Links>
                      </Link>
                      <Link href='/Blog'>
                        <Links>Read health articles</Links>
                      </Link>
                      <Link href='/Doctors'>
                        <Links>Chat with a doctor</Links>
                      </Link>
                    </div>
                  </div>

                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}

                    <Link href='/'>
                      <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                        <p className='mx-2'>Countries and settings</p>
                        <RiArrowDropDownLine />
                        <span className='py-4 border-b border-[#00F9ED]' />
                      </div>
                      {/* list */}
                      <div className='my-4 mx-2'>
                        <Links>Choose a Country</Links>
                        <Links>Choose a Language</Links>
                      </div>
                    </Link>
                  </div>
                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}
                    <Link href='/Contacts'>
                      <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                        <p className='mx-2'>Contact us</p>
                        <RiArrowDropDownLine />
                        <span className='py-4 border-b border-[#00F9ED]' />
                      </div>
                    </Link>
                    {/* list */}
                    <div className='my-4 mx-2'>
                      {/* <p className='text-slate-600 my-2'>Find a doctor</p>
                                        <p className='text-slate-600 my-2'>Video Consultation</p> */}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}
                    <Link href='/Labs'>
                      <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                        <p className='mx-2'>Lab Tests and Diagnostics</p>
                        <RiArrowDropDownLine />
                        <span className='py-4 border-b border-[#00F9ED]' />
                      </div>
                    </Link>
                    {/* list */}
                    <div className='my-4 mx-2'>
                      <Link href='/Labs'>
                        <Links>Book a Lab test</Links>
                        <Links>Get Tested At Home</Links>
                        <Links>Get Vaccinated</Links>
                        <Links>Men Wellness Packages</Links>
                        <Links>Womens Wellness Packages</Links>
                      </Link>
                    </div>
                  </div>

                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}
                    <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                      <p className='mx-2'>Get Assistance</p>
                      <RiArrowDropDownLine />
                      <span className='py-4 border-b border-[#00F9ED]' />
                    </div>
                    {/* list */}
                    <div className='my-4 mx-2'>
                      <Link href='https://api.whatsapp.com/send/?phone=2349130006888&text=Hi&type=phone_number&app_absent=0' passHref={true}>
                        <Links>Chat With Vera</Links>
                        <Links>Talk to a CX Champion</Links>
                      </Link>
                      <Link href='/Blog'>
                        <Links>Blog</Links>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}
                    <Link href='/Pharmacy'>
                      <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                        <p className='mx-2'>Pharmacy</p>
                        <RiArrowDropDownLine />
                        <span className='py-4 border-b border-[#00F9ED]' />
                      </div>
                    </Link>
                    {/* list */}
                    <div className='my-4 mx-2'>
                      <Link href='/Categories'>
                        <Links>Order Medication</Links>
                      </Link>
                      <Link href='/Prescription'>
                        <Links>Upload Prescription</Links>
                      </Link>
                      <Link href='/Categories'>
                        <Links>Vitamins &amp; Supplements</Links>
                        <Links>Health &amp; Beauty</Links>
                        <Links>Personal Care</Links>
                        <Links>Hair Care</Links>
                        <Links>Eye Care</Links>
                        <Links>Mum &amp; Baby</Links>
                        <Links>Perfumes And Sprays</Links>
                        <Links>Medical Devices - Diagnostics</Links>
                      </Link>
                      <Link href='/Blog'>
                        <Links>Read about medicines</Links>
                      </Link>
                    </div>
                  </div>

                  {/* item */}
                  <div className='flex flex-col'>
                    {/* category */}
                    <Link href='/ContinuosCare'>
                      <div className='flex flex-row items-center border-b-4  border-[#00F9ED]'>
                        <p className='mx-2'>Care and technology</p>
                        <RiArrowDropDownLine />
                        <span className='py-4 border-b border-[#00F9ED]' />
                      </div>
                    </Link>
                    {/* list */}
                    <div className='my-4 mx-2'>
                      <Link href='/ContinuosCare'>
                        <Links className='text-slate-600 my-2'>
                          Continuous Care Programme
                        </Links>
                      </Link>
                      <Link href='https://apps.apple.com/us/app/zuri-health/id1554395747'>
                        <Links className='text-slate-600 my-2'>
                          Download our IOS App
                        </Links>
                      </Link>
                      <Link href='https://play.google.com/store/apps/details?id=com.zurihealth_patient&hl=en&gl=US'>
                        <Links className='text-slate-600 my-2'>
                          Download our Android App
                        </Links>
                      </Link>
                      <Link href='/Partner'>
                        <Links className='text-slate-600 my-2'>
                          Become a Partner
                        </Links>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className='w-full py-4 flex flex-row items-center justify-center'>
          <div className='flex  w-full items-end justify-between mx-4 max-w-[1440px]'>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                className='hidden lg:block object-scale-down'
              />
            </Link>

            <div className='flex flex-row lg:hidden w-full h-full mt-8 justify-between'>
              <Link href='/'>
                <div className='items-start'>
                  <Image
                    src={logo}
                    alt='logo'
                    className=''
                    width={80}
                    height={40}
                  />
                </div>
              </Link>
              <RxHamburgerMenu
                size={40}
                onClick={() => setOpenMenu(true)}
                className='hover:text-[#5cdadc] transition-all duration-150 ease-linear cursor-pointer'
              />
            </div>

            <div className='lg:flex flex-row hidden '>
              <Link href='/Doctors'>
                <div
                  className='flex flex-row items-center mx-2'>
                  <Links className='mx-2'>Engage with doctors</Links>
                </div>
              </Link>
              <Link href='/Labs'>
                <div className='flex flex-row items-center mx-2'>
                  <Links className='mx-2'>Lab Test & Diagnostics</Links>

                  {/* {openLabs ? (
                                    <div className='absolute w-full h-full'>

                                    </div>
                                ) : null} */}
                </div>
              </Link>
              <Dropdown
              menu={{
                items: pharmacy,
              }}
              className='flex items-center justify-center text-center cursor-pointer'
              onClick={(e) => e.preventDefault()}>
                <div className='flex flex-row items-center mx-2' onClick={(e) => e.preventDefault()}>
                  <Links className='mx-2'>Order Medicine</Links>
                  <RiArrowDropDownLine />
                </div>
            </Dropdown>
            </div>

            <div onClick={() => setOpenMenu(true)} className='hidden lg:block'>
              <RxHamburgerMenu
                size={40}
                className='hover:text-[#5cdadc] transition-all duration-150 ease-linear cursor-pointer'
              />
            </div>
          </div>
        </div>
        {openDrop ? (
          <div className='absolute right-[35%] top-[15%] w-fit p-4 bg-white border border-black rounded-lg'>
            <h3 className='text-lg'>Pharmacy</h3>
            <hr className='my-4' />
            <h3 className='text-lg'>Pharmacy</h3>
            <hr className='my-4' />
            <h3 className='text-lg'>Pharmacy</h3>
            <hr className='my-4' />
            <h3 className='text-lg'>Pharmacy</h3>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
