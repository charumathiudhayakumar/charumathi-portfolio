import fs from 'node:fs'
import PDFDocument from 'pdfkit'
const doc = new PDFDocument({ size: 'A4', margin: 0, info: { Title: 'Charu - Software Developer Resume', Author: 'Charu' } })
doc.pipe(fs.createWriteStream('public/charumathi-resume.pdf'))
const navy = '#0B1020', violet = '#8B5CF6', cyan = '#0891B2', muted = '#475569', line = '#E2E8F0', pale = '#F8FAFC', left = 54, width = 487
doc.rect(0, 0, 595, 842).fill('#FFFFFF')
doc.fillColor(navy).font('Helvetica-Bold').fontSize(29).text('CHARU', left, 48)
doc.fillColor(violet).fontSize(10).text('SOFTWARE DEVELOPER  /  REACT.JS + FLUTTER', left, 86, { characterSpacing: 1.1 })
doc.fillColor(muted).font('Helvetica').fontSize(9.5).lineGap(4).text('Software developer with 3 years of experience building responsive web and mobile products. Focused on clear interfaces, dependable frontend architecture, and practical product development across customer, merchant, admin, and delivery workflows.', left, 112, { width })
doc.strokeColor(line).moveTo(left, 168).lineTo(left + width, 168).stroke()
function section(title, y) { doc.fillColor(cyan).font('Helvetica-Bold').fontSize(10).text(title, left, y, { characterSpacing: 1.5 }) }
function exp(company, role, period, bullets, y) { doc.fillColor(navy).font('Helvetica-Bold').fontSize(13).text(company, left, y); doc.fillColor(violet).fontSize(8).text(period, left + 380, y + 2, { width: 107, align: 'right' }); doc.fillColor(muted).font('Helvetica-Bold').fontSize(9).text(role, left, y + 23); let by = y + 47; doc.font('Helvetica').fontSize(8.8).lineGap(3); bullets.forEach(item => { doc.text(`- ${item}`, left + 4, by, { width: 474 }); by = doc.y + 6 }); return by }
section('EXPERIENCE', 187)
let y = exp('AKV Technologies', 'Frontend Developer', '2023', ['Developed frontend experiences using React.js, HTML, CSS, JavaScript, TypeScript, and WordPress.', 'Worked on MP Tours and Travel, the AKV Technologies website, Valuecodes, and Inout Space e-commerce.'], 215)
y = exp('Generic Technologies', 'Software Developer - Product Development', 'PRODUCT WORK', ['Built merchant onboarding, administration, customer, and delivery product workflows.', 'Developed the Merchant Application, Onboarding Application, Admin Panel, Customer App, and Delivery Partner App using React.js and Flutter.'], y + 16)
section('SELECTED PROJECTS', y + 13)
doc.fillColor(muted).font('Helvetica').fontSize(8.7).lineGap(4).text('MP Tours and Travel  /  AKV Technologies website  /  Valuecodes  /  Inout Space e-commerce  /  Merchant Application  /  Onboarding Application  /  Admin Panel  /  Customer App  /  Delivery Partner App', left, y + 34, { width })
const skillsY = doc.y + 23; section('SKILLS', skillsY)
const boxY = skillsY + 26, boxW = 155, gap = 11, columns = [['FRONTEND', 'React.js, TypeScript, JavaScript, HTML, CSS, WordPress'], ['MOBILE', 'Flutter'], ['TOOLS', 'Git, GitHub, VS Code, Postman, Figma']]
columns.forEach(([heading, body], i) => { const x = left + i * (boxW + gap); doc.roundedRect(x, boxY, boxW, 82, 7).fillAndStroke(pale, line); doc.fillColor(violet).font('Helvetica-Bold').fontSize(8).text(heading, x + 11, boxY + 12, { width: 133 }); doc.fillColor(navy).font('Helvetica').fontSize(8.4).lineGap(3).text(body, x + 11, boxY + 34, { width: 133 }) })
doc.fillColor('#94A3B8').font('Helvetica').fontSize(7.5).text('Portfolio resume generated from verified project information.', left, 798, { width, align: 'center' })
doc.end()
