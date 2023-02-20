const validate = (values) => {
 let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

 const errors = {
  name: '',
  nameBorder: '',
  email: '',
  emailBorder: '',
  phone: '',
  phoneBorder: '',
  address: '',
  addressBorder: '',
  hseNumber: '',
  hseNumberBorder: '',
  city: '',
  cityBorder: '',
  country: '',
  countryBorder: ''
}

console.log('hep me', !values.phone.startsWith('+26'))

 if (!values.name) {
  errors.name = 'Name cannot be empty'
  errors.nameBorder = '#FF0000'
 }
 if (values.name.length < 3) {
  errors.name = 'Name must be more than 3 characters';
  errors.nameBorder = '#FF0000'
 }
 if(values.name.length > 3) {
  errors.nameBorder = '#454B1B'
 }
 if (!values.email.match(regex)) {
  errors.email = 'This is not a valid email address'
  errors.emailBorder = '#FF0000'
 } 
 if(values.email.match(regex)) {
  errors.emailBorder = '#454B1B'
 }
 if (!values.phone.startsWith('+254') && !values.phone.startsWith('+26')) {
  errors.phone = 'Phone number must start with +254 or + 26'
  errors.phoneBorder = '#FF0000'
  } 
  if(values.phone.startsWith('+254') || values.phone.startsWith('+26')) {
   errors.phoneBorder = '#454B1B'
  }
 if (values.address.length < 5) {
  errors.address = 'Address must be at least 5 characters'
  errors.addressBorder = '#FF0000'
 } 
 if(values.address.length > 4) {
  errors.addressBorder = '#454B1B'
 }
 if (values.hseNumber.length < 5) {
  errors.hseNumber = 'House/Flat No. & Building Name* cannot be less than 5 characters long'
  errors.hseNumberBorder = '#FF0000'
 } 
 if(values.hseNumber.length > 4) {
  errors.hseNumberBorder = '#454B1B'
 }
 if (values.city.length < 2) {
  errors.city = 'City/Town cannot be less than 2 characters long'
  errors.cityBorder = '#FF0000'
 } 
 if(values.city.length > 1) {
  errors.cityBorder = '#454B1B'
 }
 if (values.country.length < 3) {
  errors.country = 'Country cannot be less than 3 characters long'
  errors.countryBorder = '#FF0000'
 }
 if(values.country.length > 2) {
  errors.countryBorder = '#454B1B'
 }
 return errors
}

export default validate