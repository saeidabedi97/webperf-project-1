# Visit the website => https://travellperformance.vercel.app/

The mission of this cloned project is to increase the performance of an old website which was built 10 years ago without using any framework. 

the performance of the website at the beggining was 39% but then with all optimizations and using express js it enhanced to 100% performance score in lighthouse. (Desktop)
The performance of the website in mobile was 15% but now it is 79%. 

These optimzations include compressing the images and converting them to webp format type. lazy loading has been used for secondary images. Different set of img sources has been set for different view breakpoints. 

below you can see the main reasons of choosing express js in this project. 

## Why express js?
1-one of the main reasons of choosing express is that we can compress the text response headers with gzip by using the express middleware. 
2-express js automatically sets the eTAG and last modified headers which helps to handle conditional requests. 
3-with express js you can set up the catch but i have not used express for caching in this project. 

## why deployed with Vercel? 
My main goal was to find a CDN for the website in production mode. so i decided to deploy it in Vercel which automatically provides a CDN. 
Vercel does the most of the job that i have done till now like compression and asset optimization but the main point in this project is to try and understand different performance enhancement techniques. 

