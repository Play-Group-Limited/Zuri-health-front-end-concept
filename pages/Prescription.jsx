import React, { useState } from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../config/api.config';
const { Dragger } = Upload;

const Prescription = () => {
    
    const [prescription, setPrescription] = useState([])
    const props = {
        name: 'file',
        multiple: true,
        listType: "picture-card",
        fileList: prescription,
        onChange: async ({ fileList: newFileList }) => {
          setPrescription(newFileList);
          const formData = new FormData();
          formData.append("prescription", newFileList[0].originFileObj);
          console.log('.............', formData);
          try {
            const { data } = await axios.post(
              `${API_URL}/pharmacy/direct_order/prescription_upload`,
              formData
            );
            setPrescription([{ uid: data._id, url: data.url }]);
            toast.success("Prescription uploaded");
          } catch (error) {
            toast.error("An error occurred uploading your prescription");
            console.log(error);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
      };

    //   const uploadPrescription = async (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     const formData = new FormData()
    //     formData.append("prescription", e.target.files[0])
    //     try {
          
    //       setPrescription(data._id)
    //       setLoading(false)
    //     } catch (error) {
    //       setLoading(false)
    //       toast.error("An error occured uploading your prescription")
    //       console.log(error)
    //     }
    //   }

      console.log("PRESCRIPTION", prescription)


  return (
    <div className='w-full h-full pt-12'>
        <div className='flex flex-col justify-center items-center'>
          <div className=' max-w-[1440px] w-full relative mx-4'>
            <div className='flex flex-col items-center justify-center my-8 mx-4'>
                <h2 className='text-3xl mb-6 underline font-bold'>Upload Your Prescription</h2>
                <p className='text-center'>Please upload your prescription below and our customer service representatives will get in touch with you shortly</p>
            </div>
            <div className='mx-4 my-4'>
                <Dragger {...props} >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Prescription