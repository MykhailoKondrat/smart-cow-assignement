export const useCreateNewVideo = () => {
  // Encapsulating logic in a hook facade
  const handleSaveNewVideo = () => {
    //dispatch some redux here / send  api calls
  }
  const handleCancelNewVideo = () => {
    //dispatch some redux here / send  api calls
  }
  return { handleSaveNewVideo, handleCancelNewVideo }
}
