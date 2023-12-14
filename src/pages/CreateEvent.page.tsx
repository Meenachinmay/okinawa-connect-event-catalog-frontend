import {
  Flex,
  HStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import EventImage from '../components/EventImage'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../firebase/clientApp'

import { inputFields } from '../data-arrays/input-field.array'
import { CustomInput } from '../components/custom-components/CustomInput.input'
import useSubmitForm from '../hooks/useSubmitForm'

export interface IFromInput {
  title: string
  prefecture: string
  city: string
  date: Date
  description: string
  tags: string
  activities: string
  omiyage: string
  snsLinks: string
  foodOptions: string
  trains: string
}

const CreateEvent: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([])

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const [downloadableUrls, setDownloadableUrls] = useState<string[]>([])
  const [uploadProgress, setUploadProgress] = useState<number[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IFromInput>()

  // delete image on click and update the state
  const handleDelete = (urlToDelete: string): void => {
    const indexToDelete = downloadableUrls.indexOf(urlToDelete)
    if (indexToDelete > -1) {
      const updatedUrls = [...downloadableUrls] // Create a copy
      updatedUrls.splice(indexToDelete, 1) // Remove the element
      setDownloadableUrls(updatedUrls) // Update the state
    }
  }

  // here we are calling a async Hook for submit form data to the server
  const { onSubmit, loading } = useSubmitForm()

  // image upload section goes here
  // Get User input as image files
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...e.target.files])
    }
  }

  // handle upload images. Call this method onClic
  const handleUpload = async () => {
    const storageRef = ref(storage)
    // prepare upload here
    const uploadTasks = selectedFiles.map(file => {
      const fileRef = ref(storageRef, `events/${file.name}`)
      const task = uploadBytesResumable(fileRef, file)
      // Listen to the state_changed event to track progress
      task.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setUploadProgress(prevProgress => [...prevProgress, progress])
      })
      return task
    })

    // upload files from here and get downloadable URL
    try {
      const uploadSnapshots = await Promise.all(uploadTasks)
      console.log('started....')

      const urls = await Promise.all(
        uploadSnapshots.map(snapshot => getDownloadURL(snapshot.ref)),
      )

      setDownloadableUrls(urls)
      setUploadProgress([])
      console.log('finished uploading...')
    } catch (error) {
      console.error('Error uploading images:', error)
    }

  }

  // upload image related useEffect here
  useEffect(() => {
   if (!selectedFiles) {
    return
   }
  }, [selectedFiles])

  // handling text area value using ReactQuill and react-hook-form
  const handleTextArea = (newValue: string) => {
    setValue('description', newValue)
  }

  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        p={10}
        bg={'gray.200'}
      >
        <Flex
          bg={'white'}
          borderRadius={'0px'}
          width={{ base: '50%', sm: '70%', md: '100%' }}
          height={'full'}
          opacity={'1'}
          p={5}
          justifyContent={{ base: 'center', sm: 'center', md: 'start' }}
        >
          <FormControl>
            <form
              onSubmit={handleSubmit(data => onSubmit(data, reset, errors, downloadableUrls))}
            >
              <HStack
                width={'full'}
                flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
                alignItems={'center'}
                justifyContent={'center'}
                marginBottom={'3'}
              >
                <Flex flexDirection={'column'} width={'full'}>
                  <FormLabel htmlFor="title" fontSize={'xs'} color={'red.700'}>
                    *Title
                  </FormLabel>
                  <Input
                    {...register('title', { required: 'Title is required' })}
                    placeholder="Title"
                    type="text"
                    borderRadius={'0px'}
                  />
                </Flex>

                <Flex width={'full'} flexDir={'column'}>
                  <FormLabel htmlFor="title" fontSize={'xs'} color={'red.700'}>
                    *Prefecture
                  </FormLabel>
                  <Input
                    {...register('prefecture', { required: true })}
                    placeholder="prefecture"
                    type="text"
                    borderRadius={'0px'}
                  />
                </Flex>

                <Flex width={'full'} flexDirection={'column'}>
                  <FormLabel htmlFor="title" fontSize={'xs'} color={'red.700'}>
                    *City
                  </FormLabel>
                  <Input
                    {...register('city', { required: true })}
                    placeholder="city"
                    type="text"
                    borderRadius={'0px'}
                  />
                </Flex>

                <Flex width={'full'} flexDirection={'column'}>
                  <FormLabel htmlFor="title" fontSize={'xs'} color={'red.700'}>
                    *Date
                  </FormLabel>
                  <Input
                    {...register('date', { required: true })}
                    type="date"
                    borderRadius={'0px'}
                  />
                </Flex>
              </HStack>
              <ReactQuill theme="snow" onChange={handleTextArea} />
              <Box width={'auto'} marginTop={'10px'}>
                <input type="file" multiple onChange={handleFileInputChange} />
                <Button
                  bg={'orange.500'}
                  color={'white'}
                  _hover={{ bg: 'green.300' }}
                  onClick={handleUpload}
                  borderRadius={'0px'}
                  fontSize={'sm'}
                >
                  Upload Images
                </Button>
              </Box>

              <div
                style={{
                  width: '100%',
                  height: '200px',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  whiteSpace: 'nowrap',
                  marginTop: '10px',
                }}
              >
                {downloadableUrls.map(url => (
                  <EventImage url={url} handleDelete={handleDelete} key={url} />
                ))}
              </div>

              {/* add remaining feild here */}
              <Flex
                width={'full'}
                maxWidth={'inherit'}
                marginTop={'10px'}
                height={'inherit'}
                flexDir={'column'}
                gap={3}
              >
                {inputFields.map(field => (
                  <CustomInput
                    key={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    register={register}
                    name={field.name}
                    required={field.required}
                  />
                ))}
              </Flex>
              <Button
                marginTop={'10px'}
                bg={'orange.500'}
                color={'white'}
                _hover={{ bg: 'green.300' }}
                width={'full'}
                type="submit"
                disabled={loading}
                isLoading={loading}
                loadingText={'Createing event'}
                borderRadius={'0'}
                fontSize={'sm'}
              >
                Submit
              </Button>
            </form>
          </FormControl>
        </Flex>
      </Flex>
    </>
  )
}

export default CreateEvent
