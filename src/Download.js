import React from 'react'

function Download() {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '100%', height: 50}} className="bg-white mb-4">
              <h4 style={{textAlign: 'center'}} className='p-2'>DOWNLOAD</h4>
        </div>

        <div style={{textAlign: 'center', width: '70%', display: 'flex', alignItems: 'center', flexDirection: 'column'}} className='download-table'>
            <h4>यहाँ पर संस्था में इस्तेमाल होने वाले फार्म निशुल्क डाउनलोड किये जा सकते है जिससे संस्था के सदस्य के समय की बचत हो सके। फार्म की फीस ऑफिस में जमा करते समय देनी होगी। </h4>

            <table width="70%" height="479" border="5" cellpadding="5" cellspacing="0" className='download-table'>
                
              <tr>
                <td width="13%"><div align="center" class="style12"><span class="style6">1.</span></div></td>
                <td width="56%"><span class="style14">Form Rate List </span></td>
                <td width="31%"><span class="style18"><a href="pdf/Form_Rate_List.pdf">Click here to download</a></span></td>
              </tr>
              
              <tr>
                <td width="13%"><div align="center" class="style12"><span class="style6">2.</span></div></td>
                <td width="56%"><span class="style14">138 Notice (Proprietorship Firm)</span></td>
                <td width="31%"><span class="style18"><a href="pdf/138_Propritership.pdf">Click here to download</a></span></td>
              </tr>
              
               <tr>
                <td width="13%"><div align="center" class="style12"><span class="style6">3.</span></div></td>
                <td width="56%"><span class="style14">138  Notice (Partnership Firm)</span></td>
                <td width="31%"><span class="style18"><a href="pdf/138_Partnership.pdf">Click here to download</a></span></td>
              </tr>
               <tr>
                <td width="13%"><div align="center" class="style12"><span class="style6">4.</span></div></td>
                <td width="56%"><span class="style14">138  Notice (Pvt. Ltd/ Ltd. Firm)</span></td>
                <td width="31%"><span class="style18"><a href="pdf/138_Private_Limited.pdf">Click here to download</a></span></td>
              </tr>
              {/* <tr>
                <td><div align="center" class="style12"><span class="style6">5.</span></div></td>
                <td><span class="style14">Claim  Paper**** </span></td>
                <td><span class="style11"><a href="pdf/Claim_Paper.pdf">Click here to download</a></span></td>
              </tr> */}
              <tr>
                <td><div align="center" class="style12"><span class="style6">6.</span></div></td>
                <td><span class="style14">Form  Darkhawasth</span></td>
                <td><span class="style11"><a href="pdf/FormDarkhawasth2020.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">7.</span></div></td>
                <td><span class="style14">Form  Darkhawasth (Non-payment)</span></td>
                <td><span class="style11"><a href="pdf/FormDarkhawasth(Non-payment)2020.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">8.</span></div></td>
                <td><span class="style14">Mukhtiyar  Aam</span></td>
                <td><span class="style11"><a href="pdf/Mukhtiyar_Aam.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">9.</span></div></td>
                <td><span class="style14">Mukhtiyar  Khas</span></td>
                <td><span class="style11"><a href="pdf/MukhtiyarKhas2020.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">10.</span></div></td>
                <td><span class="style14">Nakal  Form</span></td>
                <td><span class="style11"><a href="pdf/NakalForm2020.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">11.</span></div></td>
                <td><span class="style14">New  Dalali Form</span></td>
                <td><span class="style11"><a href="pdf/New_Dalali_Form.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">12.</span></div></td>
                <td><span class="style14">Promissory  Note</span></td>
                <td><span class="style11"><a href="pdf/Promissory_Note.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">13.</span></div></td>
                <td><span class="style14">Renewal  Dalai Form</span></td>
                <td><span class="style11"><a href="pdf/Renewal_Dalai_Form.pdf">Click here to download</a></span></td>
              </tr>
              {/* <tr>
                <td><div align="center" class="style12"><span class="style6">14.</span></div></td>
                <td><span class="style14">Sadastha  Praman Patra****</span></td>
                <td><span class="style11"><a href="pdf/Sadastha_Praman_Patra.jpg">Click here to download</a></span></td>
              </tr> */}
              <tr>
                <td><div align="center" class="style12"><span class="style6">15.</span></div></td>
                <td><span class="style14">Sansthagat  Sadastha Form</span></td>
                <td><span class="style11"><a href="pdf/SansthagatSadasthaForm2020.pdf">Click here to download</a></span></td>
              </tr>
              <tr>
                <td><div align="center" class="style12"><span class="style6">16.</span></div></td>
                <td><span class="style14">Witness  Form</span></td>
                <td><span class="style11"><a href="pdf/Witness_Form.pdf">Click here to download</a></span></td>
              </tr>
                <tr>
                <td><div align="center" class="style12"><span class="style6">17.</span></div></td>
                <td><span class="style14">Voter 2014   Form</span></td>
                <td><span class="style11"><a href="pdf/Voter_Form_2014.pdf">Click here to download</a></span></td>
              </tr>
                <tr>
                <td><div align="center" class="style12"><span class="style6">18.</span></div></td>
                <td><span class="style14">Sadasytha Aawedan-Margdarshak Bindu</span></td>
                <td><span class="style11"><a href="pdf/Sadasytha_Aawedan-Margdarshak_Bindu.pdf">Click here to download</a></span></td>
              </tr>
            </table>
        </div>
    </div>
  )
}

export default Download