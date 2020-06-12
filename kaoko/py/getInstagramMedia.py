  
from igramscraper.instagram import Instagram
import sys
import json
import base64

instagram = Instagram()
decodedUrl = base64.urlsafe_b64decode(sys.argv[1]).decode('ascii')
media = instagram.get_media_by_url(decodedUrl)

if media.video_standard_resolution_url:
    print(media.video_standard_resolution_url)
elif media.image_standard_resolution_url:
    print(media.image_standard_resolution_url)
