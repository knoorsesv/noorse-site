import React from 'react'
import { Anchor, Box, Text } from 'grommet'
import { Facebook, Github } from 'grommet-icons'

const NoorseFooter = () => (
  <Box>
    <Box background={'dark-1'}
         pad={'large'}
         justify={'between'}
         direction={'row'}>
      <Box direction={'row'}
           gap={'medium'} border={'between'}>
        <Box>
          Logo
        </Box>
        <Box>
          Sponsors
        </Box>
      </Box>
      <Box direction={'row'} gap={'medium'} border={'between'}>
        <Box>
          Sitemap?
        </Box>
        <Box gap={'medium'}>
          <Text weight={'bold'} size={'medium'} alignSelf={'end'}>
            Contact
          </Text>
          <Box align={'end'}>

            <Text size={'small'}>
              Frans de Peuterstraat
            </Text>
            <Text size={'small'}>
              03/543.xx.xx
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box justify={'between'}
         direction={'row'}
         background={'dark-2'}
         pad={{ vertical: 'medium', horizontal: 'large' }}>
      <Box direction={'column'} gap={'small'}>
        <Text size={'small'}>
          © {new Date().getFullYear()}, K. Noorse S.V.
        </Text>
        <Text size={'small'}>
          Built with <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
        </Text>
      </Box>
      <Box direction={'row'} gap={'medium'} align={'center'}>
        <Facebook size={'medium'}/>
        <Github size={'medium'}/>
      </Box>
    </Box>
  </Box>
)

export default NoorseFooter
