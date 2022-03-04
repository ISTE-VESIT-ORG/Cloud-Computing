import os
from supabase import create_client, Client
import config

url: str = config.SUPABASE_URL
key: str = config.SUPABASE_KEY

supabase: Client = create_client(url, key)

# select all rows command
data = supabase.table("countries").select("*").execute()
print(data)

# inserting a new record
supabase.table("countries").insert({"id": 6, "name": "Germany"}).execute()

data = supabase.table("countries").select("*").execute()
print(data)
