function download(address,downloaded)
{
    console.log("Downloading from  ${address}")
    setTimeout(() => {
        console.log("Download and saved as ${url.split('/').pop()}")
    
    }, 3000)
}

download('https://Dhruv.com/path/image.jpg')