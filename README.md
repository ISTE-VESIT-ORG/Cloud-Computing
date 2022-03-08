<p align="center">
  <h1 align="center">CLOUD COMPUTING</h1>
</p>

## Supabase
 
### Supabase is an open source Firebase alternative.
It provides all the backend services you need to build a product. You can use it completely, or just the services you require:

- Database : 
A dedicated, scalable Postgres database.

- Auth : 
User management with Row Level Security.

- File Storage :  <br/>
Store, organize, and serve large files.

- Auto-generated APIs :  <br/>
Instantly generate APIs for your database. 

Feature Highlights include : 
- PostgreSQL is an object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. <br/>
- Realtime is an Elixir server that allows you to listen to PostgreSQL inserts, updates, and deletes using websockets. Realtime polls Postgres' built-in replication functionality for database changes, converts changes to JSON, then broadcasts the JSON over websockets to authorized clients. <br/>
- PostgREST is a web server that turns your PostgreSQL database directly into a RESTful API. <br/>
- Storage provides a RESTful interface for managing Files stored in S3, using Postgres to manage permissions. <br/>
- postgres-meta is a RESTful API for managing your Postgres, allowing you to fetch tables, add roles, and run queries, etc. <br/>
- GoTrue is an SWT based API for managing users and issuing SWT tokens. <br/>
- Kong is a cloud-native API gateway. <br/>

_For more detail, visit [SupaBase Documentation](https://supabase.com/docs)_

### Supabase Setup <br/>
- Installing python package : <br/>
	In[] : 'pip install supabase'
 
- Importing library :<br/>
	 In[] : 'from supabase import create_client, Client'<br/>
 
- Setting the URL and API Key :<br/>
	In[] : 'SUPABASE_URL = ""<br/>
			SUPABASE_KEY = ""'<br/>
 
- You can get the URL and KEY by going to the API Settings on Supabase
 
- Key under the Project API Keys section and URL under the Configuration section.
 
- It is suggested to store the URL and KEY in the config.py file to increase security.
 
- Establish a connection using the URL and API Key : <br/>
	In[] : 'supabase = create_client(SUPABASE_URL, SUPABASE_KEY)'
 
- You can create a table by following the stepsgiven below(if you are already signed in) : <br/>
    Go to app.supabase.io <br/>
    Open an existing project or create a new one <br/>
    Go to table editor <br/>
    Create a new table <br/>
    You can either fill the fields manually or import it from a spreadsheet <br/>
 
- Now that you have created a table to retrieve the data : <br/>
    In[] : 'data = supabase.table("countries").select("*").execute()' <br/>
            'print(data)' <br/>
    Out[] : data=[{'id': 1, 'name': 'USA'}, {'id': 2, 'name': 'China'}, {'id': 3, 'name': 'India'}, {'id': 4, 'name': 'UK'}, {'id': 5, 'name': 'Russia'}] count=None <br/>
 
- Inserting record : <br/>
    In[] : 'supabase.table("countries").insert({"id":6, "name":"Germany"}).execute()' <br/>
    Out[] : APIResponse(data=[{'id': 6, 'name': 'Germany'}], count=None) <br/>
    In[] : 'data = supabase.table("countries").select("*").execute() <br/>
            print(data)' <br/>
    Out[] : data=[{'id': 1, 'name': 'USA'}, {'id': 2, 'name': 'China'}, {'id': 3, 'name': 'India'}, {'id': 4, 'name': 'UK'}, {'id': 5, 'name': 'Russia'}, {'id': 6, 'name': 'Germany'}] count=None <br/>
 
- Updating records : <br/>
    In[] : 'supabase.table("countries").update({"name": "Australia"}).eq("id",6).execute()' <br/>
    Out[] : APIResponse(data=[{'id': 6, 'name': 'Australia'}], count=None) <br/>
    In[] : 'data = supabase.table("countries").select("*").execute() <br/>
            print(data)' <br/>
    Out[] : data=[{'id': 1, 'name': 'USA'}, {'id': 2, 'name': 'China'}, {'id': 3, 'name': 'India'}, {'id': 4, 'name': 'UK'}, {'id': 5, 'name': 'Russia'}, {'id': 6, 'name': 'Australia'}] count=None <br/>
 
- Deleting records : <br/>
    In[] : 'supabase.table("countries").delete().eq("id",6).execute()' <br/>
    Out[] : APIResponse(data=[{'id': 6, 'name': 'Australia'}], count=None) <br/>
    In[] : 'data = supabase.table("countries").select("*").execute() <br/>
            print(data)' <br/>
    Out[] : data=[{'id': 1, 'name': 'USA'}, {'id': 2, 'name': 'China'}, {'id': 3, 'name': 'India'}, {'id': 4, 'name': 'UK'}, {'id': 5, 'name': 'Russia'}] count=None <br/>



## Cloudinary : 

Cloudinary’s media experience platform is used by more than 7,000 companies and over 700,000 developers, to manage and automate highly performant rich media, and deliver visually compelling experiences for their websites, mobile apps, and marketing campaigns. Cloudinary’s Digital Asset Management solution is a modern DAM powered by AI, providing organizations with a single source of truth and making it easier for teams to store, transform, and deliver rich media assets. <br/>
The platform uses AI and advanced image and video processing capabilities to enable developers, marketers, creative teams, media publishers, and e-commerce digital teams. <br/>
Feature Highlights include: <br/>
- Automatic transformation of images and videos in real time to any responsive size, with automatic formatting for optimized delivery to every device and browser <br/>
Advanced AI capabilities for auto-tagging, content-aware auto-cropping - using deep learning, auto-quality, auto-format, face detection, object detection and background removal, celebrity detection, OCR, auto-transcription, and more. <br/>
- Dynamic digital asset management with built-in collaboration features and powerful self-serve media editing capabilities to enable efficient asset workflow across all your teams - marketers, creatives, and developers <br/>
- Rich video capabilities, including a highly customisable HTML5 video player <br/>
- Extensive set of effects and transformations for images and videos <br/>
- High performance multi-CDN delivery of rich media <br/>
- REST APIs for media upload, transformation and delivery <br/>
- Technology integrations with Adobe, AWS, Google, WordPress, Salesforce, Shutterstock, and more. <br/>

_For more detail, visit [Cloudinary Documentation](https://cloudinary.com/documentation)_

## Vercel 

Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database. <br/>
We provide a frictionless developer experience to take care of the hard things: deploying instantly, scaling automatically, and serving personalized content around the globe. <br/>
We make it easy for frontend teams to develop, preview, and ship delightful user experiences, where performance is the default. <br/>

It’s super simple to deploy websites or applications on Vercel. There is no need to handle issues such as the unavailability of servers since hosting your business site on Vercel means deploying it instantly. It’s also configured with automatic scaling in mind — so no matter how popular your website becomes, there will always be enough computing power to support it. <br/>
Vercel handles all the administrative work to ensure your site is up and running smoothly. What’s more, it provides personalized content around the globe by collecting real-time information about how visitors are interacting with your website or service! <br/>
 
Feature Highlights include : <br/> 
- You can deploy the Github repository to your vercel deployment server. <br/>
- Automatic deployment of the production branch, your master or main branch is deployed automatically to the server when you push the changes. <br/>
- Marketplace to integrate third-party tools like Google lighthouse and slack etc. <br/>
- Serverless functions support deploying functions without a need for a server. <br/>
- Connecting teams to work collectively and fast and configure the settings of deployment accordingly. <br/>
 
 
_For more detail, visit [Vercel Documentation](https://vercel.com/docs)_
