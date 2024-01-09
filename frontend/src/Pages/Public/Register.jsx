import {
  IoMailSharp,
  IoLockClosedSharp,
  IoPerson,
  IoCallSharp,
  IoLocateSharp,
  IoArrowBack
} from 'react-icons/io5'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FaBuilding } from 'react-icons/fa6'
import { BsLadder } from 'react-icons/bs'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [seePassword, setSeePassword] = useState(false)
  const [password, setPassword] = useState('')
  const [seller, setSeller] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })
  const [buyer, setBuyer] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    Admin: true,
    role: 'buyer',
    position: '',
    companyName: ''
  })
  const [userType, setUserType] = useState('')
  const [error, setError] = useState('')
  // FIREBASE FUNCTION FOR REGISTERING
  const { createUser } = useContext(AuthContext)

  const handleSellerSubmit = async e => {
    e.preventDefault()
    if (userType === 'seller') {
      const { user, error } = createUser(seller, password)
      if (user) navigate('/')
      setError(error)
    } else if (userType === 'buyer') {
      const { user, error } = createUser(buyer, password)
      if (user) navigate('/')
      setError(error)
    }
  }
  return (
    <>
      <div className='min-h-screen flex justify-center p-24'>
        <div className='max-w-sm w-full flex flex-col items-center gap-2'>
          <Link to='/'><img src='/logo.png' className='max-w-40 mr-6' /></Link>
          {/* FORM CONTAINER */}
          <div className='w-full font-heading mt-6'>
            <h1 className='text-center font-semibold text-4xl mb-6'>
              Register
            </h1>
            <hr className='mb-3' />
            {/* CHOOSING USER */}
            {userType === '' ? (
              <div className='my-10 w-full'>
                <h1 className='text-center font-medium text-lg mb-3'>
                  Are you looking to:
                </h1>
                <div className='flex justify-center gap-2 w-full'>
                  <button
                    className='btn bg-primary hover:bg-primary border-none text-white flex-1 hover:shadow-xl'
                    onClick={() => setUserType('seller')}
                  >
                    Sell your waste
                  </button>
                  <button
                    className='btn bg-primary hover:bg-primary border-none text-white flex-1 hover:shadow-xl'
                    onClick={() => setUserType('buyer')}
                  >
                    Buy waste
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* USER IS BUYER */}
            {userType === 'buyer' ? (
              <>
                <form onSubmit={handleSellerSubmit} className='mb-10 mt-3'>
                  {/* GO BACK */}
                  <div className='flex items-center gap-2 border-b mb-4 pb-2'>
                    <button
                      className='btn btn-sm bg-primary text-white border-none hover:bg-primary hover:shadow-xl'
                      type='button'
                      onClick={() => {
                        setUserType('')
                      }}
                    >
                      <IoArrowBack></IoArrowBack>
                    </button>
                    <h1 className='font-bold text-primary'>Buyer</h1>
                  </div>
                  {/* EMAIL INPUT */}
                  <h1 className='mb-3 text-sm'>Your Information</h1>
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoMailSharp className='w-4 text-primary'></IoMailSharp>
                    </div>
                    <input
                      type='email'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Email'
                      onChange={e =>
                        setBuyer({
                          ...buyer,
                          email: e.target.value
                        })
                      }
                    ></input>
                  </div>
                  {/* NAME INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoPerson className='w-4 text-primary'></IoPerson>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Name'
                      onChange={e =>
                        setBuyer({
                          ...buyer,
                          fullName: e.target.value
                        })
                      }
                    ></input>
                  </div>
                  {/* PHONE INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoCallSharp className='w-4 text-primary'></IoCallSharp>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Phone'
                      onChange={e =>
                        setBuyer({
                          ...buyer,
                          phoneNumber: e.target.value
                        })
                      }
                    ></input>
                  </div>
                  <h1 className='mb-3 text-sm'>Company Information</h1>
                  {/* COMPANY NAME INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <FaBuilding className='w-4 text-primary'></FaBuilding>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Company Name'
                      onChange={e =>
                        setBuyer({
                          ...buyer,
                          companyName: e.target.value
                        })
                      }
                    ></input>
                  </div>

                  {/* COMPANY POSITION INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <BsLadder className='w-4 text-primary'></BsLadder>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Position'
                      onChange={e =>
                        setBuyer({
                          ...buyer,
                          position: e.target.value
                        })
                      }
                    ></input>
                  </div>

                  {/* COMPANY ADDRESS INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoLocateSharp className='w-4 text-primary'></IoLocateSharp>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Company Address'
                    ></input>
                  </div>
                  <h1 className='mb-3 text-sm'>Password</h1>
                  {/* PASSWORD INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoLockClosedSharp className='w-4 text-primary'></IoLockClosedSharp>
                    </div>
                    <input
                      type={seePassword ? 'text' : 'password'}
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Password'
                      onChange={e => setPassword(e.target.value)}
                    ></input>
                    <button
                      type='button'
                      className='absolute right-3 inset-y-0 text-xl text-gray-600'
                      onClick={() => {
                        setSeePassword(!seePassword)
                      }}
                    >
                      {seePassword ? (
                        <AiFillEyeInvisible></AiFillEyeInvisible>
                      ) : (
                        <AiFillEye></AiFillEye>
                      )}
                    </button>
                  </div>
                  {/* SUBMIT BUTTON */}
                  <button className='btn bg-primary text-white hover:bg-primary border-none block mx-auto w-1/2'>
                    Sign Up
                  </button>
                </form>
              </>
            ) : (
              <></>
            )}
            {/* USER IS SELLER */}
            {userType === 'seller' ? (
              <>
                <form onSubmit={handleSellerSubmit} className='mb-10 mt-3'>
                  <div className='flex items-center gap-2 border-b mb-4 pb-2'>
                    <button
                      className='btn btn-sm bg-primary text-white border-none hover:bg-primary hover:shadow-xl'
                      type='button'
                      onClick={() => {
                        setUserType('')
                      }}
                    >
                      <IoArrowBack></IoArrowBack>
                    </button>
                    <h1 className='font-bold text-primary'>Seller</h1>
                  </div>
                  {/* EMAIL INPUT */}
                  <h1 className='mb-3 text-sm'>Your Information</h1>
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoMailSharp className='w-4 text-primary'></IoMailSharp>
                    </div>
                    <input
                      type='email'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Email'
                      onChange={e =>
                        setSeller({
                          ...seller,
                          email: e.target.value
                        })
                      }
                    ></input>
                  </div>
                  {/* NAME INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoPerson className='w-4 text-primary'></IoPerson>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Name'
                      onChange={e =>
                        setSeller({
                          ...seller,
                          fullName: e.target.value
                        })
                      }
                    ></input>
                  </div>
                  {/* PHONE INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoCallSharp className='w-4 text-primary'></IoCallSharp>
                    </div>
                    <input
                      type='text'
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Phone'
                      onChange={e =>
                        setSeller({
                          ...seller,
                          phoneNumber: e.target.value
                        })
                      }
                    ></input>
                  </div>
                  {/* <h1 className="mb-3 text-sm">Company Information</h1> */}
                  {/* COMPANY NAME INPUT */}
                  {/* <div className="relative mb-3">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FaBuilding className="w-4 text-primary"></FaBuilding>
                    </div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5"
                      placeholder="Company Name"
                    ></input>
                  </div> */}
                  {/* COMPANY ADDRESS INPUT */}
                  {/* <div className="relative mb-3">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <IoLocateSharp className="w-4 text-primary"></IoLocateSharp>
                    </div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5"
                      placeholder="Company Address"
                    ></input>
                  </div> */}
                  <h1 className='mb-3 text-sm'>Password</h1>
                  {/* PASSWORD INPUT */}
                  <div className='relative mb-3'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                      <IoLockClosedSharp className='w-4 text-primary'></IoLockClosedSharp>
                    </div>
                    <input
                      type={seePassword ? 'text' : 'password'}
                      className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full ps-10 p-2.5'
                      placeholder='Your Password'
                      onChange={e => setPassword(e.target.value)}
                    ></input>
                    <button
                      type='button'
                      className='absolute right-3 inset-y-0 text-xl text-gray-600'
                      onClick={() => {
                        setSeePassword(!seePassword)
                      }}
                    >
                      {seePassword ? (
                        <AiFillEyeInvisible></AiFillEyeInvisible>
                      ) : (
                        <AiFillEye></AiFillEye>
                      )}
                    </button>
                  </div>
                  {error && (
                    <p
                      style={{
                        textAlign: 'center',
                        color: 'red',
                        marginBottom: '5px'
                      }}
                    >
                      Login Error
                    </p>
                  )}
                  {/* SUBMIT BUTTON */}

                  <button className='btn bg-primary text-white hover:bg-primary border-none block mx-auto w-1/2'>
                    Sign Up
                  </button>
                </form>
              </>
            ) : (
              <></>
            )}
            <hr className='mb-3' />
            <h1 className='text-center mt-5 font-semibold flex items-center justify-center'>
              {'Already have an account? '}
              <Link className='link text-primary' to={'/login'}>
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
