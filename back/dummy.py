import re

def extract_video_id(youtube_url):
    # YouTube URL에서 비디오 ID를 추출하는 정규식
    regex = r"(?:youtube\.com/watch\?v=|youtu\.be/)([^\s&]+)"
    match = re.search(regex, youtube_url)
    if match:
        return match.group(1)
    return None

print(extract_video_id("https://www.youtube.com/watch?v=LKAx4MbAcYQ"))