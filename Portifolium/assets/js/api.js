
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Tosi-eu/Fullstack/main/Portifolium/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
