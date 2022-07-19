export const URL_MAPS = (lat, lng)=>{

return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&markers=color:red%7Clabel:C%7C${lat},${lng}&zoom=13&size=600x500&maptype=roadmap&key=AIzaSyCRjZ_ojZyIKSiN0kEtReU2uiaf6HHV94E`


}


export const URL_GEOCODING = (lat, lng) => {
    return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCRjZ_ojZyIKSiN0kEtReU2uiaf6HHV94E`
}