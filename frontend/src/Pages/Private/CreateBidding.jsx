import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiMiniInformationCircle } from 'react-icons/hi2'
import axios from 'axios'
import { post } from '../../utilis/queries'

const image_hosting_key = 'bb3f3b7c9ba5aa6d4945a14c12a429aa'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateBidding = () => {
  const { register, handleSubmit } = useForm()

  const [product, setProduct] = useState({
    name: '',
    weight: 0,
    starting_price: 0,
    image: '',
    location: '',
    type_of_waste: '',
    starting_time: 0,
    bidding_duration: 0
  })

  const onSubmit = async data => {
    const imageFile = { image: data.image[0] }
    console.log(imageFile.image)
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('weight', parseFloat(data.weight))
    formData.append('type_of_waste', data.type_of_waste)
    formData.append('location', data.location)
    formData.append('image', imageFile.image)
    formData.append('starting_price', data.starting_price)
    formData.append('starting_time', data.starting_time)
    formData.append('bidding_duration', parseInt(data.bidding_duration))
    const today = new Date()
    const startingTime = new Date(data.starting_time)
    const endTime = new Date(
      startingTime.getTime() + data.bidding_duration * 24 * 60 * 60 * 1000
    )

    if (today < startingTime) {
      formData.append('postStatus', 'published')
      data['postStatus'] = 'published'
    } else if (today >= startingTime && today <= endTime) {
      formData.append('postStatus', 'ongoing')
    }
    const result = await post('products/create-product', formData)
    console.log(formData)
    console.log(result)
    /* const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // LOGIC AFTER IMAGE IS HOSTED SUCCESSFULLY
      const today = new Date();
      const startingTime = new Date(data.starting_time);
      const endTime = new Date(startingTime.getTime() + data.bidding_duration * 24 * 60 * 60 * 1000);

      if (today < startingTime) {
        data["postStatus"] = "published";
      } else if (today >= startingTime && today <= endTime) {

        data["postStatus"] = "ongoing";
      }


      data["image"] = res.data.data.display_url;
      // data["status"] = "draft";

      // DATA FROM FORM
      console.log(data);
    } else {
      console.log("Error uploading image");
    } */
  }

  return (
    <>
      <h2 className='bg-primary text-white font-heading text-3xl p-3 text-center shadow-xl rounded-xl font-medium'>
        Sell Waste
      </h2>
      <div className='border-2 shadow-xl bg-white rounded-xl p-3 mt-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-4 font-heading'>
            <div className='flex items-center gap-2'>
              <h1>Waste Information</h1>
              <div
                className='tooltip tooltip-right'
                data-tip='The post will only be as a draft which can be edited before publishing'
              >
                <HiMiniInformationCircle className='text-2xl text-gray-700'></HiMiniInformationCircle>
              </div>
            </div>
            <hr />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {/* TITLE OF SELLING POST */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Title
              </h1>
              <input
                type='text'
                {...register('name', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='What do you want to sell?'
                required
              ></input>
            </div>
            {/* TYPE OF WASTE */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Type of Waste
              </h1>
              <input
                type='text'
                {...register('type_of_waste', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='Describe Your Waste'
                required
              ></input>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {/* WEIGHT OF WASTE */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Weight
              </h1>
              <input
                type='text'
                {...register('weight', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='Approximate weight of the waste'
                required
              ></input>
            </div>
            {/* LOCATION */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Location
              </h1>
              <input
                type='text'
                {...register('location', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='Where are you located?'
                required
              ></input>
            </div>
            {/* IMAGE DATA */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Image of Waste
              </h1>
              <input
                type='file'
                {...register('image', { required: true })}
                className='file-input w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block h-11 -mt-0.5'
                required
              />
            </div>
          </div>
          <div className='my-4 font-heading'>
            <h1>Bidding Information</h1>
            <hr />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className='mb-3'>
              {/* STARTING PRICE */}
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Starting Price
              </h1>
              <input
                type='number'
                {...register('starting_price', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='Starting Price (RM)'
                required
              ></input>
            </div>
            {/* STARTING TIME */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Starting Time
              </h1>
              <input
                type='date'
                {...register('starting_time', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='When will the bidding start?'
                required
              ></input>
            </div>
            {/* BIDDING DURATION */}
            <div className='mb-3'>
              <h1 className='font-heading mb-1 font-semibold text-gray-700'>
                Bidding Duration (Days)
              </h1>
              <input
                type='number'
                {...register('bidding_duration', { required: true })}
                className='bg-gray-50 border border-gray-300 text-text text-sm rounded-lg block w-full p-2.5'
                placeholder='How long will the auction last?'
                required
              ></input>
            </div>
          </div>
          <button className='btn bg-primary hover:bg-primary hover:shadow-xl text-white w-[80%] block mx-auto'>
            Create Post As Draft
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateBidding
