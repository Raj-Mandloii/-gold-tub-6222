import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/react'
import React from 'react'
import { hrefObj, ImgObj } from '../AllData/UrlImgIcon'
import styles from "../CSS/FreeHubSpotCRM.module.css"

// Reviewed for: fw18_0550 - all the components in software are almost same expect some text in the box
// This is the classic example where you can create one TabBar component and multiple config for all the 
// tabbars like Marketing, Business and customer. Just change the text and only one component can be reused
// multiple times
const Business = () => {
  return (
    <div>
         <Box mt='4rem' ml="1rem">
              <Text mb="12px" fontSize="22px" fontWeight="600" color="gray.600">
              CRM for Business Owners
              </Text>
              <Text fontSize="15px" fontWeight="500" lineHeight="30px" color="gray.600">
              You have a lot on your plate. Make things easier on yourself by tracking your contacts and customers, automating
              </Text>
              <Text fontSize="" fontWeight="400" lineHeight="30px" color="gray.600">
              administrative tasks, and sending bulk email — all using the same tool. It’s easy to use, and completely free.
              </Text>
              <button className={styles.crmbtn}>Get Free CRM</button>
            </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="38%" mr="2rem" ml="1rem">
              <Text mb="12px" mt='3rem' fontSize="23px" fontWeight="500" color="gray.700">
              Manage and organize your contacts in one powerful yet simple CRM database.
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Get a real-time view of your entire sales pipeline on a visual dashboard.
              </Text>
              <Text  mt='1rem' fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Access detailed reports on sales activity, productivity, and individual performance. Then use those insights to track team performance and spot opportunities for growth
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Enjoy unlimited users, data, and up to 1,000,000 contacts with no time limit or expiration date — whether you're a team of 1 or 1,000.
              </Text>
            </Box>
            <Box w="50%">
              <Img
                src={ImgObj.Business}
                alt="leader"
                w="80%"
                ml='3rem'
              />
            </Box>
          </Box>
          <Box mt='2rem' textAlign='center'>
                <Text fontSize="14px" fontWeight="600" color="gray.600">FREE FEATURES YOU'LL LOVE</Text>
                <HStack ml='20%' gap='1rem' mt='1rem' mb='4rem'>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} href={hrefObj.href1}>Reporting dashboard</a></Box>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} href={hrefObj.href2}>Company insights</a></Box>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} href={hrefObj.href3}>Deal tracking</a></Box>
                    <Box fontWeight='600' color='cyan.800'> <CheckCircleIcon  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} href={hrefObj.href4}>Pipeline management</a></Box>
                </HStack>
            </Box>

    </div>
  )
}

export default Business
