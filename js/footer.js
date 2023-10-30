export function createFooter () {
  const section = document.createElement('section')
  section.className = 'footer-section'

  const footerContainer = document.createElement('div')
  footerContainer.className = 'footer-container'

  const socialIcons = document.createElement('div')
  socialIcons.className = 'footer-icons-social'

  // Crear elementos a para los enlaces de redes sociales
  const instagramLink = document.createElement('a')
  instagramLink.href = 'https://www.instagram.com/gamaceros/'
  instagramLink.target = '_blank'

  const instagramIcon = document.createElement('svg')
  instagramIcon.width = 40
  instagramIcon.height = 40
  instagramIcon.setAttribute('viewBox', '0 0 50 50')
  instagramIcon.style.fill = 'rgb(200, 200, 200)'

  // Agrega el contenido SVG de Instagram aquí
  // Puedes hacer lo mismo para otros enlaces y SVGs

  // Agrega el enlace de Instagram
  instagramLink.appendChild(instagramIcon)
  socialIcons.appendChild(instagramLink)

  // Agrega otros enlaces y SVGs aquí

  // Agrega socialIcons al footerContainer
  footerContainer.appendChild(socialIcons)

  const contactInfo = document.createElement('div')
  contactInfo.className = 'footer-div-contact'

  // Agrega datos de contacto, similar a como se hizo anteriormente

  // Agrega contactInfo al footerContainer
  footerContainer.appendChild(contactInfo)

  // Agrega footerContainer al section
  section.appendChild(footerContainer)

  // Agrega el footer al documento
  document.body.appendChild(section)
}
