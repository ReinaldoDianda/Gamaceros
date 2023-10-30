export function createFooter () {
  const footerContainer = document.createElement('div')
  footerContainer.className = 'footer-container'

  const socialIcons = document.createElement('div')
  socialIcons.className = 'footer-icons-social'

  const instagramLink = document.createElement('a')
  instagramLink.href = 'https://www.instagram.com/gamaceros/'
  instagramLink.target = '_blank'
  const instagramIcon = document.createElement('img')
  instagramIcon.src = 'https://res.cloudinary.com/doo95ngwf/image/upload/f_auto,q_auto/v1622432926/instagram.svg' // Reemplaza esto con la URL de la imagen de Instagram
  instagramLink.appendChild(instagramIcon)

  const facebookLink = document.createElement('a')
  facebookLink.href = 'https://www.facebook.com/gamaceros1'
  facebookLink.target = '_blank'
  const facebookIcon = document.createElement('img')
  facebookIcon.src = 'https://res.cloudinary.com/doo95ngwf/image/upload/v1651876275/f_logo_RGB-Blue_1024_ekkzes.png' // Reemplaza esto con la URL de la imagen de Facebook
  facebookLink.appendChild(facebookIcon)

  socialIcons.appendChild(instagramLink)
  socialIcons.appendChild(facebookLink)

  const contactInfo = document.createElement('div')
  contactInfo.className = 'footer-div-contact'

  const phoneLink = document.createElement('a')
  phoneLink.href = 'tel:+593980362053'
  phoneLink.target = '_blank'
  const phoneIcon = document.createElement('img')
  phoneIcon.src = 'https://res.cloudinary.com/doo95ngwf/image/upload/v1622427804/telefono.svg' // Reemplaza esto con la URL de la imagen del ícono del teléfono
  phoneLink.appendChild(phoneIcon)
  const phoneText = document.createElement('p')
  phoneText.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24">...</svg> +593 980 362 053'
  phoneLink.appendChild(phoneText)

  const addressLink = document.createElement('a')
  addressLink.href = 'https://g.page/MrBrillante?share'
  addressLink.target = '_blank'
  const addressIcon = document.createElement('img')
  addressIcon.src = 'https://res.cloudinary.com/doo95ngwf/image/upload/v1622433202/google-maps.svg' // Reemplaza esto con la URL de la imagen del ícono de dirección
  addressLink.appendChild(addressIcon)
  const addressText = document.createElement('p')
  addressText.innerHTML = '<svg width="30" height="30" viewBox="0 0 24 24">Guayaquil - Ecuador</svg>'
  addressLink.appendChild(addressText)

  const emailLink = document.createElement('a')
  emailLink.href = 'mailto:contactogamaceros@gmail.com'
  emailLink.target = '_blank'
  const emailIcon = document.createElement('img')
  emailIcon.src = 'https://res.cloudinary.com/doo95ngwf/image/upload/v1651878790/Gmail.max-2800x2800_hpdlbx.png' // Reemplaza esto con la URL de la imagen del ícono de correo
  emailLink.appendChild(emailIcon)
  const emailText = document.createElement('p')
  emailText.innerHTML = '<svg width="30" height="21" xmlns="http://www.w3.org/2000/svg">contacto@Gamaceros.com</svg>'
  emailLink.appendChild(emailText)

  contactInfo.appendChild(phoneLink)
  contactInfo.appendChild(addressLink)
  contactInfo.appendChild(emailLink)

  footerContainer.appendChild(socialIcons)
  footerContainer.appendChild(contactInfo)

  // Agrega el footerContainer al pie de página (footer) del documento
  const footer = document.querySelector('footer')
  footer.appendChild(footerContainer)
}
