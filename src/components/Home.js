import React, { useState } from "react";
import NewsItem from "./NewsItem";
import {
 CarouselProvider,
 Slider,
 Slide,
 ButtonBack,
 ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img from "../images/img.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import corp1 from "../images/corp1.jpg";
import corp2 from "../images/corp2.jpg";
import corp3 from "../images/corp3.jpg";
import geoff1 from "../images/geoff1.jpg";
import geoff2 from "../images/geoff2.jpg";
import geoff3 from "../images/geoff3.jpg";
import ny1 from "../images/ny1.jpg";
import ny2 from "../images/ny2.jpg";
import ny3 from "../images/ny3.jpg";
import ny4 from "../images/ny4.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/letterfront.jpg";
import hero from "../images/hero.jpg";
import venmo0 from "../images/Venmo-Front.jpg";
import venmo1 from "../images/Venmo-1.jpg";
import venmo2 from "../images/Venmo-2.jpg";
import venmo3 from "../images/Venmo-3.jpg";
import venmo4 from "../images/Venmo-4.jpg";
import venmo5 from "../images/Venmo-5.jpg";
import venmo6 from "../images/Venmo-6.jpg";
import venmo7 from "../images/Venmo-7.jpg";
import venmo8 from "../images/Venmo-8.jpg";
import venmo9 from "../images/Venmo-9.jpg";
import terrychris from "../images/terrychris.png";
import criminal from "../images/criminal.jpg";
const Home = () => {
 const news = [
  {
   URL:
    "https://www.nbc12.com/2019/04/05/law-enforcement-warns-tax-letter-scam/",
   state: "Virginia",
   date: "4 / 5 / 2019",
   type: "video",
   quote:
    "The Bureau of Tax Enforcement does not exist and is used by criminals as an attempt to make fake documents appear legitimate, the sheriff’s office said.",
  },
  {
   URL:
    "https://www.live5news.com/2019/03/13/live-scambusters-orangeburg-sheriff-warns-about-threatening-tax-letter-now-circulating/",
   state: "South Carolina",
   date: "3 / 13 / 2019",
   type: "video",
   quote:
    "If you receive a letter like this, report it to your local law enforcement agency or call Crimestoppers at 1-888-CRIME-SC.",
  },
  {
   URL:
    "https://fox17online.com/2019/04/10/national-scam-hits-grand-rapids-area/",
   state: "Michigan",
   date: "4 / 10 / 2019",
   type: "video",
   quote:
    'That’s what the scammers are really counting on, that fear," said Troy Baker, with the BBB. "If you have the name of the IRS, the seal, some kind of official logo on it, it all leads to that credibility.',
  },
  {
   URL:
    "https://www.wgal.com/article/scam-targets-pennsylvania-taxpayers/22815609",
   state: "Pennsylvania",
   date: "8 / 27 / 2018",
   type: "video",
   quote:
    "WGAL consumer reporter Brian Roche called the number in the letter and spoke to a man named Chris who claimed he was with a law firm in Delaware. Chris insisted the letter isn't a scam but wouldn't say who he was representing.",
  },
  {
   URL:
    "https://www.cleveland19.com/2019/04/06/medina-police-issue-alert-about-distraint-warrant-scam/",
   state: "Ohio",
   date: "4 / 6 / 2019",
   type: "novideo",
   quote:
    "Police said the resident was able to recognize the letter as a scam and did not follow its instructions. They have released a copy of the letter in hopes that it may prevent others from potentially being conned out of their hard-earned money.",
  },
  {
   URL:
    "https://www.wistv.com/2020/03/12/mail-scam-targeting-lexington-county-residents-threatens-wage-garnishment-property-seizure/",
   state: "South Carolina",
   date: "3 / 12 / 2020",
   type: "novideo",
   quote:
    "Residents can also report a scam directly to the IRS by clicking here.",
  },
  {
   URL: "https://abcnews4.com/news/local/berkeley-county-warns-of-tax-scam",
   state: "South Carolina",
   date: "6 / 20 / 2019",
   type: "novideo",
   quote:
    "In one instance, a Summerville business received a letter from the “state of South Carolina Tax Lien Action” threatening foreclosure",
  },
  {
   URL:
    "https://nbc16.com/news/local/homeowners-beware-fraud-claiming-imminent-property-seizure-makes-its-way-to-lane-county",
   state: "Oregon",
   date: "3 / 11 / 2019",
   type: "novideo",
   quote:
    "1) A full agency name is not clearly provided. 2)The logo is a generic seal that does not properly identify any agency. 3) There is no “Bureau of Tax Enforcement” located in Eugene. 4) Lane County does not have an “Office of Lien Filings.”",
  },
  {
   URL:
    "https://wsbt.com/news/local/scam-alert-letter-targeting-berrien-county-residents-is-fake-say-officials",
   state: "Michigan",
   date: "6 / 25 / 2019",
   type: "novideo",
   quote:
    "The letter is signed by a person named “Richard Herts.” There is no person by that name that works for Berrien County.",
  },
  {
   URL:
    "https://www.courier-journal.com/story/news/2019/03/29/tax-scams-kentucky-attorney-general-warns-fake-unpaid-tax-letters/3310358002/",
   state: "Kentucky",
   date: "3 / 29 / 2019",
   type: "novideo",
   quote:
    "Attorney General Andy Beshear issued a scam alert Friday after an employee of a Kentucky church received a property tax delinquency notice from a fake agency threatening to seize control of the church property....",
  },
  {
   URL:
    "https://www.columbiadailyherald.com/news/20190513/irs-scam-hits-spring-hill",
   state: "Tennesee",
   date: "5 / 13 / 2019",
   type: "novideo",
   quote:
    "Officers advise citizens who think they may owe taxes to contact the IRS at 1 (800) 829-1040. The Treasury Inspector Potential IRS scams can also be reported to the General for Tax Administration at www.treasury.gov/tigta/contact report scam.shtml.",
  },
  {
   URL:
    "https://www.fox43.com/article/news/local/contests/state-warns-of-scam-that-threatens-residents-with-legal-action-for-not-paying-phony-tax-debts/521-0266f65b-6c19-436e-b177-42041daf2b03",
   state: "Pennsylvania",
   date: "8 / 23 / 2018",
   type: "novideo",
   quote:
    "If you believe you are a victim of this scam or have been targeted by a con artist, contact your local law enforcement agency. You can also call the Attorney General’s Bureau of Consumer Protection at 800-441-2555.",
  },
  {
   URL: "https://www.wsjm.com/2019/06/21/treasurer-warns-of-new-scam/",
   state: "Michigan",
   date: "6 / 21 / 2019",
   type: "novideo",
   quote:
    "There’s a legal process, and we at the county level will never tell you to call us, or otherwise we’re seizing it.”",
  },
  {
   URL: "https://www.kmvt.com/content/news/490199331.html",
   state: "Idaho",
   date: "8 / 6 / 2018",
   type: "video",
   quote:
    "“What really gives it away is if your taxes are not paid by, well the date is August 8, 2017. That was last year,” he said.",
  },
  {
   URL:
    "https://www.valdostadailytimes.com/news/local_news/tax-commissioner-beware-phony-letters/article_941ddbe8-09c7-59d3-8d60-943999fb00cd.html",
   state: "Georgia",
   date: "10 / 5 / 2018",
   type: "novideo",
   quote:
    "Lowndes County's tax office would have both a physical address and a local telephone number included, he said. The number on the bogus letter is an \"866\" toll-free number and the letter doesn't have an address of any kind.",
  },
  {
   URL:
    "https://cumberlink.com/news/local/crime-and-courts/department-of-revenue-warns-of-tax-mailer-scam/article_6d3d0f31-9cd8-5214-9917-a93b46252e1f.html",
   state: "Pennsylvania",
   date: "8 / 23 / 2018",
   type: "novideo",
   quote:
    "The mailer urges recipients to call a provided phone number immediately to avoid criminal penalty, property seizure and civil proceedings. The provided phone number is said to connect callers with a “levy and warrant officer.”",
  },
  {
   URL:
    "https://www.wistv.com/2020/03/11/officials-lexington-co-warn-mail-scam-targeting-residents-with-federal-liens/",
   state: "South Carolina",
   date: "3 / 11 / 2018",
   type: "novideo",
   quote:
    "“In real-world cases, the IRS will utilize in-person notification for property seizure and does not mail out property seizure notices to any U.S. citizen.”",
  },
  {
   URL:
    "https://www.irs.gov/newsroom/irs-reminder-tax-scams-continue-year-round",
   state: "IRS",
   date: "6 / 5 / 2019",
   type: "novideo",
   quote:
    "Fake tax agency. This scheme involves the mailing of a letter threatening an IRS lien or levy. The lien or levy is based on bogus delinquent taxes owed to a non-existent agency, “Bureau of Tax Enforcement.” There is no such agency. The lien notification scam also likely references the IRS to confuse potential victims into thinking the letter is from a legitimate organization.",
  },
  {
   URL:
    "https://www.counton2.com/news/local-news/scam-alert-letter-being-sent-that-threatens-property-seizure-if-taxes-arent-paid/",
   state: "South Carolina",
   date: "3 / 12 / 2019",
   type: "novideo",
   quote:
    "However, there are several flaws, some of which are that the letter implies two agencies – both state and county – without declaring who is the charging agency.",
  },
  {
   URL:
    "https://mylocalradio.com/attorney-general-state-tax-commission-warn-idahoans-of-new-tax-scam/",
   state: "Idaho",
   date: "12 / 17 / 2018",
   type: "novideo",
   quote:
    "The mailer was labeled as a “Notice of Default Pending Execution” and included two seals – though not official state seals – at the top. The scammers included a working telephone number in order to continue the fraud attempt via phone.",
  },
  {
   URL:
    "https://www.wtap.com/content/news/Deputies-warn-of-new-tax-scam-ahead-of-filing-deadline-508466151.html",
   state: "Ohio",
   date: "4 / 19 / 2019",
   type: "video",
   quote:
    "The letter also stated the person must respond by the due date listed on the letter, pay in full, or call them to avoid action. Officials say do not call that number.",
  },
  {
   URL:
    "https://www.delawarepublic.org/post/delaware-division-revenue-warns-new-taxpayer-scam",
   state: "Delaware",
   date: "4 / 27 / 2019",
   type: "novideo",
   quote:
    '“You know, think about it," she said. "That puts the taxpayer in the worst possible place. They pay a third party, they don’t get credit for it because they haven’t paid us and you know they still owe the state.”',
  },
  {
   URL:
    "https://www.reporterherald.com/2019/11/04/larimer-treasurer-warns-of-tax-lien-scam/",
   state: "Colorado",
   date: "11 / 4 / 2019",
   type: "novideo",
   quote:
    "“The federal government does not collect local property taxes, nor does it have authority to engage in or enforce local property tax collection,” Josey said.",
  },
  {
   URL:
    "https://lcvalley.dailyfly.com/Home/ArtMID/1352/ArticleID/51732/New-Tax-Scam-Warning",
   state: "Idaho",
   date: "12 / 18 / 2018",
   type: "novideo",
   quote:
    "The state Tax Commission Chairman says they’re working with law enforcement to identify the criminals.",
  },
  {
   URL:
    "https://gephardtdaily.com/local/davis-county-officials-dont-fall-for-tax-scam",
   state: "Utah",
   date: "2 / 8 / 2020",
   type: "novideo",
   quote:
    "“‪If you receive taxes due/lien notices, always check with the respective government authorities PRIOR to making ANY payments and/or sharing financial account(s) details,” the Davis County Sheriff’s Office posted on Facebook.‬",
  },
  {
   URL:
    "https://www.freep.com/story/money/personal-finance/susan-tompor/2019/06/21/hot-tax-scams-summer/1522060001/",
   state: "Michigan",
   date: "6 / 21 / 2019",
   type: "novideo",
   quote:
    "The lien or levy is based on bogus delinquent taxes owed to a nonexistent agency, 'Bureau of Tax Enforcement,' \" the IRS said in its release.",
  },
  {
   URL:
    "https://www.mlive.com/news/2020/01/tax-scam-relies-on-fake-letters-state-officials-warn.html",
   state: "Michigan",
   date: "1 / 4 / 2020",
   type: "novideo",
   quote:
    "Taxpayers who receive a letter from a scammer or have questions about their state debts should call Treasury’s Collections Service Center at (517) 636-5265.",
  },
  {
   URL:
    "https://patch.com/new-york/northfork/new-york-state-warns-residents-fake-letters-tax-scam",
   state: "New York",
   date: "8 / 30 / 2019",
   type: "novideo",
   quote:
    "The return address on this letter, which was sent to at least one person, is: Tax Processing Center  Internal Processing Service Public Judgement Records",
  },
  {
   URL:
    "https://www.wndu.com/content/news/Michigan-Treasury-Department-warns-of-scam-circulating-in-US-mail-566693721.html",
   state: "Michigan",
   date: "1 / 3 / 2020",
   type: "novideo",
   quote:
    "“This is a tricky scam that’s been reported throughout the state over the past year,” said Deputy state Treasurer Ann Good. “Taxpayers have rights. If you have questions about an outstanding state tax debt, please contact us through a verified number so we can talk about options.”",
  },
  {
   URL:
    "https://www.ksl.com/article/46715001/authorities-warn-citizens-about-tax-scam-in-davis-county",
   state: "Utah",
   date: "2 / 8 / 2020",
   type: "novideo",
   quote:
    "‪If you receive taxes due/lien notices, always check with the respective government authorities PRIOR to making ANY payments and/or sharing financial account(s) details:‬ ‪IRS (federal): 1-800-829-4933‬ ‪Utah state Tax Commission: 801-297-2200",
  },
  {
   URL:
    "https://www.theindychannel.com/news/local-news/tax-scam-targets-marion-county-residents",
   state: "Indiana",
   date: "5 / 17 / 2019",
   type: "novideo",
   quote:
    "If you're not sure whether a letter you receive is real or a scam, call the DOR at: 317-232-2240.",
  },
  {
   URL:
    "https://www.mininggazette.com/news/2020/01/treasury-scammers-using-fake-letters-in-collections-scam/",
   state: "Michigan",
   date: "1 / 6 / 2020",
   type: "novideo",
   quote:
    "The letter aggressively threatens to seize a taxpayer’s assets ― including property and Social Security benefits ― if the state tax debt is not settled.",
  },
  {
   URL:
    "https://www.kivitv.com/news/idaho-tax-commission-watch-out-for-this-scam",
   state: "Idaho",
   date: "12 / 31 / 2019",
   type: "novideo",
   quote:
    "“This is similar to other scams we’ve seen that use the county where the targeted taxpayer lives as the location of the fraudulent tax unit to make the mailing seem more official,” Tax Commission Chairman Tom Harris said.",
  },
  {
   URL:
    "https://www.bbb.org/us/ca/los-angeles/profile/tax-consultant/american-tax-solutions-1216-889700",
   state: "California",
   date: "5 / 18 / 2018",
   type: "terryinfo",
   quote:
    "****** was very hostile on 12/18/19 after asking for a full refund of our $500.00 they have not done any work they agreed to do since oct 25 2019 As they agreed to do they have charged my bank account under TNT which is I didnt hire and been very unprofessional and hostile toward me and my husband been refused to talk to the ceo on multiple occasions. I want a full refund of my $500.00",
  },
  {
   URL: "https://www.yelp.com/biz/american-tax-solutions-chicago",
   state: "Illinois",
   date: "8 / 20 / 2019",
   type: "terryinfo",
   quote:
    'Overall me and my husband gave them $6000 only to learn they were frauds. They collected the first $3000 and then turned around and asked us for more because our case was more "complicated than they realized',
  },
  {
   URL: "https://www.corporationwiki.com/p/2y767m/terry-selb",
   state: "Nevada",
   date: "5 / 18 / 2018",
   type: "terryinfo",
   quote:
    "Terry Selb has been associated with two companies, according to public records. The companies were formed over a one year period with the most recent being incorporated two years ago in January of 2018.",
  },
  {
   URL: "https://opencorporates.com/companies/us_nv/E0024212018-7",
   state: "California",
   date: "12 / 31 / 2018",
   type: "terryinfo",
   quote: "2018-01-16 - 2018-10-13 Addition of officer TERRY SELB, treasurer",
  },
  {
   URL: "https://www.sccgov.org/sites/dtac/tax/Pages/tax.aspx",
   state: "California",
   date: "3 / 16 / 2020",
   type: "novideo",
   quote:
    "The mailer falsely claims that an identified homeowner has a lien balance that is owed to the state of California, and that the homeowner is about to face a foreclosure action.",
  },
  {
   URL:
    "https://arkansasag.gov/media-center/consumer-alerts/tax-scammers-send-fake-letters/",
   state: "Arkansas",
   date: "3 / 20 / 2019",
   type: "novideo",
   quote:
    "The Arkansas Attorney General’s office has received reports of a scam being sent through the mail which appears to be a letter from the so-called “Bureau of Tax Enforcement for Pulaski County”—an entity that does NOT exist—claiming the recipient owes money to another state.",
  },
  {
   URL:
    "https://kentucky.gov/Pages/Activity-stream.aspx?n=AttorneyGeneral&prId=744",
   state: "Kentucky",
   date: "3 / 29 / 2019",
   type: "novideo",
   quote:
    "“With the thought of losing a property, even the savviest Kentuckian could be forced into a panic and fall victim to a property tax scam,” said Beshear. “It is important that Kentuckians contact their county or state tax official to verify any actual property tax debt before making a payment and never pay over the phone.”",
  },
  {
   URL:
    "https://news.delaware.gov/2019/04/24/scam-alert-revenue-warns-taxpayers-of-fraudulent-letters/",
   state: "Delaware",
   date: "4 / 24 / 2019",
   type: "novideo",
   quote:
    "Victims may receive a letter from “The Bureau of Tax Enforcement” that threatens property seizure and wage garnishment unless they call a toll-free number to “avoid enforcement.”",
  },
  {
   URL: "https://tax.idaho.gov/n-feed.cfm?idd=4277",
   state: "Idaho",
   date: "4 / 11 / 2019",
   type: "novideo",
   quote:
    "The mailing sent to the Middleton resident was from the “Benefits Suspension Unit” in Canyon County. No such unit exists. The mailer was labeled as a “Notice of Intent (to) Levy Social Security Benefits” and threatened to garnish the recipient’s Social Security benefits, wages, bank accounts and federal tax refunds.",
  },
  {
   URL: "https://tax.idaho.gov/n-feed.cfm?idd=4293",
   state: "Idaho",
   date: "12 / 31 / 2019",
   type: "novideo",
   quote:
    "The alert was issued after the Tax Commission and the Idaho Attorney General’s Office warned Idahoans of a similar fraud scheme in April.",
  },
  {
   URL:
    "https://www.wivb.com/news/nys-department-of-taxation-and-finance-warning-public-of-scam-targeting-taxpayers/",
   state: "New York",
   date: "8 / 30 / 2019",
   type: "novideo",
   quote:
    "Officials say letters coming by mail demand payment for outstanding tax debt and threaten to take away the person’s passport and drivers license. The state says it never threatens arrest or to take away your passport.",
  },
  {
   URL:
    "https://upnorthlive.com/news/local/sheriff-beware-of-tax-scam-being-sent-through-mail",
   state: "Michigan",
   date: "2 / 8 / 2020",
   type: "novideo",
   quote:
    "I called the 800 number and the gentleman answered. I ask him who he was representing and he said Kalkaska County, of which I continued to ask more questions,” Kalkaska County Treasurer Valerie Thornburg said. “He turned it on me and basically said he feels like he was being scammed so he was going to hang up on me.",
  },
  {
   URL:
    "https://www.counton2.com/news/local-news/berkeley-county-news/possible-tax-scam-in-berkeley-county/",
   state: "South Carolina",
   date: "6 / 21 / 2019",
   type: "video",
   quote:
    "The Berkeley County Tax Office has informed residents to be aware of fake tax letters from “state of South Carolina Tax Lien Action” that have been showing up in mailboxes. The office says these letters are scam, threatening to take legal action against the taxpayer, trying to trick people out of thousands of dollars. A similar scam was reported in Georgia in 2018.",
  },
  {
   URL:
    "https://www.facebook.com/KanawhaSheriff/posts/1025827154432831?__tn__=-R",
   state: "West Virginia",
   date: "12 / 4 / 2019",
   type: "novideo",
   quote:
    "Another scam is going around. This one involves a letter allegedly from the Kanawha County Sheriff's Office's Tax Division. Always independently verify the numbers you're dialing are correct before providing any information to someone you don't know.",
  },
  {
   URL:
    "https://www.irs.gov/newsroom/taxpayers-should-beware-of-property-lien-scam",
   state: "IRS",
   date: "9 / 26 / 2019",
   type: "novideo",
   quote:
    "The non-existent agencies might have a legitimate-sounding name like the “Bureau of Tax Enforcement.” There is no such agency.",
  },
  {
   URL:
    "https://www.michigan.gov/som/0,4669,7-192-29943_34759-515819--,00.html",
   state: "Michigan",
   date: "1 / 3 / 2020",
   type: "novideo",
   quote:
    "In the scheme, taxpayers receive what appears to be a government-looking letter about an overdue tax bill, asking individuals to immediately contact a toll-free number to resolve a state tax debt. The letter aggressively threatens to seize a taxpayer’s assets ― including property and Social Security benefits ― if the state tax debt is not settled.",
  },
  {
   URL:
    "https://www.michigan.gov/treasury/0,4679,7-121-1755_1963-515819--,00.html",
   state: "Michigan",
   date: "1 / 3 / 2020",
   type: "novideo",
   quote:
    "Taxpayers who receive a letter from a scammer or have questions about their state debts should call Treasury’s Collections Service Center at 517-636-5265. A customer service representative can log the scam, verify outstanding state debts and provide flexible payment options.",
  },
  {
   URL: "https://www.tax.ny.gov/press/rel/2019/scamletter083019.htm",
   state: "New York",
   date: "8 / 30 / 2019",
   type: "novideo",
   quote:
    "The Federal Trade Commission (FTC) should also be alerted. You can file a complaint on the FTC webor by calling 1-877-FTC-HELP (1-877-382-4357).",
  },
  {
   URL:
    "https://www.reporterherald.com/2019/11/04/larimer-treasurer-warns-of-tax-lien-scam/",
   state: "Colorado",
   date: "11 / 4 / 2019",
   type: "novideo",
   quote:
    "The notice, which has been sent in the mail, claims that a tax lien has been placed on the resident’s property for non-payment of taxes and urges the resident to call (800) 279-0231 to avoid enforcement through garnished wages, seized property or seized tax returns. The letter claims to be from the “Tax Processing Unit in Larimer County, Public Judgment of Records.” That entity does not exist, Josey said.",
  },
 ];

 const [text, setText] = useState(false);
 const onClick = (e) => {
  if (text === false) {
   setText(true);
  } else setText(false);
 };

 return (
  <div>
   <img
    src={terrychris}
    style={{
     width: "100vw",
     height: "75vh",
    }}
   />
   <img
    src={hero}
    style={{
     width: "100vw",
     height: "75vh",
     position: "absolute",
     top: "10",
     zIndex: "-1",
    }}
   />
   <div className='container'>
    <h5 className='lead text-danger'>
     Terry Selb owns and operates American Tax Solutions under the name Chris
     Baker (who is a mental invalid). Terry Selb has defrauded hundreds of
     people with deceptive advertising and illicit money management.
    </h5>
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p className='lead text-danger'>
     "I don’t know but profits have been so good that Terry now has a Maybach
     and a driver." <br /> Chris Baker
    </p>
   </div>

   <div className='grid-2'>
    <div>
     <img src={criminal} alt='Terry Selb' />
    </div>
    <div>
     <p className='text-danger lead'>
      This is the worst of the letters sent by Terry Selb And Geoff Plourde
     </p>
    </div>
   </div>
   <div className='grid-3'>
    <div>
     <img src={corp1} alt='' />
    </div>
    <div>
     <img src={corp2} alt='' />
    </div>
    <div>
     <img src={corp3} alt='' />
    </div>
   </div>
   <div>
    <h5>
     {" "}
     Proof that Terry is paying Chris Baker for his silence and Chris Bakers
     lack of mental acuity
    </h5>
    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={125}
     totalSlides={13}>
     <ButtonBack>Back</ButtonBack>
     <ButtonNext>Next</ButtonNext>
     <Slider>
      <Slide index={0}>
       <img src={venmo0} alt='' />
      </Slide>
      <Slide index={1}>
       <img src={venmo1} alt='' />
      </Slide>
      <Slide index={2}>
       <img src={venmo2} alt='' />
      </Slide>
      <Slide index={3}>
       <img src={venmo3} alt='' />
      </Slide>
      <Slide index={4}>
       <img src={venmo4} alt='' />
      </Slide>
      <Slide index={6}>
       <img src={venmo5} alt='' />
      </Slide>
      <Slide index={5}>
       <img src={venmo6} alt='' />
      </Slide>
      <Slide index={7}>
       <img src={venmo7} alt='' />
      </Slide>
      <Slide index={8}>
       <img src={venmo8} alt='' />
      </Slide>
      <Slide index={9}>
       <img src={venmo9} alt='' />
      </Slide>
     </Slider>
    </CarouselProvider>
   </div>

   <div>
    <h5>
     Information regarding The State of New York investigating mailers
     authorized by Geoff Plourde a registered legal practitioner in New York.
    </h5>

    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={125}
     totalSlides={13}>
     <ButtonBack>Back</ButtonBack>
     <ButtonNext>Next</ButtonNext>
     <Slider>
      <Slide index={0}>
       <img src={geoff1} alt='' />
      </Slide>
      <Slide index={1}>
       <img src={geoff2} alt='' />
      </Slide>
      <Slide index={2}>
       <img src={geoff3} alt='' />
      </Slide>
      <Slide index={3}>
       <img src={ny1} alt='' />
      </Slide>
      <Slide index={4}>
       <img src={ny2} alt='' />
      </Slide>
      <Slide index={6}>
       <img src={ny3} alt='' />
      </Slide>
      <Slide index={5}>
       <img src={ny4} alt='' />
      </Slide>
     </Slider>
    </CarouselProvider>
   </div>

   <div className='my-3'>
    <h5>Pictures of the illegal mailers sent around the United States</h5>
    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={125}
     totalSlides={13}>
     <ButtonBack>Back</ButtonBack>
     <ButtonNext>Next</ButtonNext>
     <Slider>
      <Slide index={0}>
       <div className='card'>
        {text ? (
         <div className='card bg-light'>
          <h5>
           Bureau of Tax Enforcement <br />
           Internal Processing Service <br />
           For New Castle County <br />
           Public Judgement Records
          </h5>

          <p>
           [Name] YOUR PROPERTY WILL BE SEIZED <br />
           Final Demand for Payment <br /> for Nonpayment of Taxes to The State
           of Delaware The State of Delaware has attempted to collect the
           overdue above debt <br /> which has not been paid. You must call
           [Number] by 4/29/2019 <br />
           The State of Delaware will seize this property for nonpayment of
           taxes, penalty and interest due to the State.
           <br /> During this seizure it will be against the law to enter,
           dismantle, take possession of or remove anything from your property.
           The State of Delaware will impose to garnishment on all bank accounts
           and income in the of [Name] <br />
           Note to avoid enforcement call [number] by 4/29/2019
           <br /> or further action will be taken against you.
          </p>
         </div>
        ) : (
         <img src={img} />
        )}
        <button onClick={onClick}>Full Text</button>
       </div>
      </Slide>
      <Slide index={1}>
       <div className='card'>
        {text ? (
         <div className='card bg-light'>
          <h5>
           Tax Enforcement Department <br />
           Internal Processing Service <br />
           For Sullivan County <br />
           Public Judgement Records <br />
          </h5>

          <p>
           The Internal Revenue Service has attempted to obtain delinquent tax
           payments. You have not responded to the prior notice(s) issued to
           address in your name. You must respond by the due date and you must
           PAY IN FULL OR CALL [Number] What Will Happen: We are writing to
           inform you that if no direct action is taken by you the Internal
           Revenue Service may be forced to collect [amount] in overdue taxes by
           taking , which is called levying property and selling them. The need
           to levy property will not cease until action is taken to pay the debt
           owed, your United States passworked will be revoked along with your
           driver’s license. What You Must Do: To avoid enforced collection by
           levy, call [number] by 3/4/2019 or further actions will be taken in
           exacting the value by levying. Failure to respond to official notice
           is the same as non-compliance. If you have any questions regarding
           this letter, please do not hesitate to contact us at the telephone
           number listed above.
          </p>
         </div>
        ) : (
         <img src={img2} />
        )}
        <button onClick={onClick}>Full Text</button>
       </div>
      </Slide>

      <Slide index={2}>
       <div className='card'>
        {text ? (
         <div className='card bg-light'>
          <h5>Notice of Warranted Lien</h5>

          <p>
           This notice has been issued against the above named debtors because
           of the tax debt that has not been paid. This is not a warrant. This
           notice serves the same function as a public notification. The Taxing
           Authority has placed a lien in your name and may take collection
           action, such as garnishment of wages, bank accounts, property
           seizures, federal tax refund offset, and creation of a line. To avoid
           enforcement call [number] Note Interest may continue to accrue until
           the balance is paid in full by due date. This notice acts as a
           notification against the debtors. A lien has been filed on any
           property now owned or acquired in the future until the debt is paid
           in full. This notice has been sent to [name] due to the taxes owened
           to the Authority and levying procedures may begin within 15 days of
           its receipt. You are to respond by due date and pay in full or call
           [number] to avoid action.
          </p>
         </div>
        ) : (
         <img src={img3} />
        )}
        <button onClick={onClick}>Full Text</button>
       </div>
      </Slide>
      <br />

      <Slide index={3}>
       <div className='card'>
        {text ? (
         <div className='card bg-light'>
          <h5>
           Benefits suspension unit Madison County Public Judgement Records
          </h5>

          <p>
           Notice of Intent to Levy Social Security Benefits <br />
           Amount Due : 10000 Due by : 02/29/2020 Dear Name This notice has been
           issued against the debtor name because of a lien filing duie to the
           tax liability that has not been paid. This letter serves as a final
           judgement notice. The state of Montana can now take enforcement
           action such as seizing social security benefits and garnishing wages
           and bank accounts to satisfy the outstanding debt owed. IF no action
           is taken by [date] the State of Montana may permanently revoke
           benefits, spuspend license and levy and federal tax refund gained
           this year. Your debt must be resolved in full to remove the lien. To
           avoid enforcement, Call Number within 15 days of receiving this
           notice. Failure to respond in time will cause an additional penalty
           to accumulate and lead to default judgement.
          </p>
         </div>
        ) : (
         <img src={img6} />
        )}
        <button onClick={onClick}>Full Text</button>
       </div>
      </Slide>
      <Slide index={4}>
       <div className='card' style={{ width: "25%", height: "25%" }}>
        <img src={img7} />
       </div>
      </Slide>
      <Slide index={5}>
       <div className='card' style={{ width: "25%", height: "25%" }}>
        <img src={img8} />
       </div>
      </Slide>
      <Slide index={6}>
       <div className='card' style={{ width: "25%", height: "25%" }}>
        <img src={img9} />
       </div>
      </Slide>
      <Slide index={7}>
       <div className='card' style={{ width: "25%", height: "25%" }}>
        <img src={img10} />
       </div>
      </Slide>
     </Slider>
    </CarouselProvider>
   </div>
   <div className='grid-2' style={{ maxHeight: "50%" }}>
    {news.map((newa) => (
     <NewsItem key={newa.URL} newa={newa} />
    ))}
   </div>
  </div>
 );
};

export default Home;
