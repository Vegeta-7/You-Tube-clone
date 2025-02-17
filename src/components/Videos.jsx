import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from "./index"
import Loader from "./Loader"

const Videos = ({ videos, direction }) => {   
  if(!videos?.length) return <Loader />;

  return (
    <Stack direction={ direction || 'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>      
      {videos?.map((item,idx)=>(
        (item.id.videoId || item.id.channelId) && (
          <Box key={idx} sx={{ width: { xs: '100%', sm: 'auto' } }}>
            {item.id.videoId && (
              <VideoCard video={item}/>
            )}
            {item.id.channelId && (
              <ChannelCard channelDetail={item}/>
            )}          
          </Box>
        )
      ))}
    </Stack>
  )
}

export default Videos