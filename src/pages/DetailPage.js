import React from 'react';
import './DetailPage.css';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/SideBar';
import FloatingTextarea from '../components/askFollow';

const DetailPage = () => {
  const { title } = useParams();

  return (
    <div className="detail-page">
        <Sidebar/>
        <div className='article-display'>
          <div className='page-head-details'>
            <button style={{ height: 50,width:50, display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#181b1b',borderRadius: 5, border:'#8b8b8d'}}>
              <svg style={{ height: 20, width: 20}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" class="svg-inline--fa fa-bookmark fa-fw fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#8b8b8d" d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path></svg>
            </button>
            <button style={{ height: 50,width:50, display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor: '#29bccf',borderRadius: 5}}>
              <svg style={{ height: 30, width: 30 }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="link" class="svg-inline--fa fa-link fa-fw fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M580.3 267.2c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6L433.1 346.6c-37.4 37.4-98.2 37.4-135.6 0c-35.7-35.7-37.6-92.9-4.4-130.9l4.7-5.4c8.7-10 7.7-25.1-2.3-33.9s-25.1-7.7-33.9 2.3l-4.7 5.4c-49.8 57-46.9 142.9 6.6 196.4c56.2 56.2 147.3 56.2 203.5 0L580.3 267.2zM59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6L207 165.4c37.4-37.4 98.1-37.4 135.6 0c35.7 35.7 37.6 92.9 4.4 130.9l-5.4 6.1c-8.7 10-7.7 25.1 2.3 33.9s25.1 7.7 33.9-2.3l5.4-6.1c49.9-57 47-142.9-6.5-196.5c-56.2-56.2-147.3-56.2-203.5 0L59.7 244.8z"></path></svg>
            </button>
            <button style={{ height: 50, width: 100,display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' ,marginRight: 20, backgroundColor: '#29bccf',borderRadius: 5, gap:'5px'}}>
              <svg style={{ height: 20, width: 20 }} aria-hidden="true" focusable="false" data-prefix="fass" data-icon="share" class="svg-inline--fa fa-share fa-fw fa-1x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 208L320 384H288V288H208c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176H288V32h32L512 208z"></path></svg>
            Share</button>
          </div>
          <div className='page-content'>
            <div className='header-image'>
              <img src='https://pplx-res.cloudinary.com/image/upload/v1728253705/user_uploads/ngcwujsrn/china-lazer.jpg' alt='Not Found'/>
            </div>
            <div className='article-content'>
              <div className='article-content-text'>
                  <h1 style={{ color:'#e8e8e6' , fontSize: 70, fontFamily: 'Segoe UI',fontWeight:'normal'}}>{title}</h1>
                  <div style={{display: 'flex', justifyContent: 'space-between', width: 900}}>
                    <div style={{display: 'flex', gap: 15, width: 300}}>
                      <img style={{ height: 50, width: 50, borderRadius: 999, marginTop: 15}} src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/831bd9b7-78f7-4d06-7380-44809b816500/thumbnail' alt='Not Found'></img>
                      <div style={{ height: 50, width: 200, border: 0, marginTop: 15, color: '#8b8b8d', fontSize: 20}}>Curated by elymc<br></br>2 min read</div>
                    </div>
                    <div style={{ display: 'flex',height: 50, width: 'auto', border: 0, marginTop: 15, color: '#8b8b8d98', fontSize: 20, gap: 20}}>
                      <h4 style={{display:'flex',alignItems: 'center', justifyContent: 'center',gap: 5}}><svg style= {{width: 18, height: 18}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" class="svg-inline--fa fa-clock fa-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>13 hours ago</h4>

                      <h4 style={{display:'flex',alignItems: 'center', justifyContent: 'center',gap: 5}}><svg style= {{width: 18, height: 18}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" class="svg-inline--fa fa-eye fa-fw fa-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"></path></svg>5,802</h4>

                      <h4 style={{display:'flex',alignItems: 'center', justifyContent: 'center',gap: 5}}><svg style= {{width: 18, height: 18}} aria-hidden="true" focusable="false" data-prefix="far" data-icon="code-fork" class="svg-inline--fa fa-code-fork fa-fw fa-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M80 112a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80-32c0 35.8-23.5 66.1-56 76.3V192c0 22.1 17.9 40 40 40H304c22.1 0 40-17.9 40-40V156.3c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3V192c0 48.6-39.4 88-88 88H248v75.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3V280H144c-48.6 0-88-39.4-88-88V156.3C23.5 146.1 0 115.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM256 432a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>748</h4>
                    </div>
                  </div>
                  <p style={{ color:'#e8e8e6', fontFamily: 'Segoe UI', fontWeight:'normal'}} className="big-first-letter"> Based on reports from Marketplace, the Authors Guild is introducing a "Human Authored" label for
                  books, allowing its 15,000 members to certify their works as written by humans rather than artificial
                  intelligence, in response to the growing prevalence of AI-generated content in the publishing industry.
                  </p>
                  <div>
                    <h2 style={{ color:'#e8e8e6', marginTop: 40, fontSize: 50, fontFamily: 'Segoe UI', fontWeight:'normal', marginBottom: 20}}>Purpose of Human Authored Label</h2>
                    <p style={{ color:'#e8e8e6', fontFamily: 'Segoe UI', fontWeight:'normal', fontSize: 22}}>
                    The "Human Authored" label serves as a visual indicator on book covers, akin to literary award stickers or celebrity book
                    club endorsements, to help readers identify works written by humans rather than AI1. This certification
                    aims to address concerns about the influx of AI-generated content in e-bookstores and provide a quality
                    assurance measure for consumers. The Authors Guild hopes this label will:
                    <ul>
                      <li>Sway human readers to purchase works by human writers</li>
                      <li>Function similarly to organic or fair-trade labels on grocery items</li>
                      <li>Assist lesser-known authors in distinguishing their work in crowded marketplaces</li>
                      <li>Compete with the increasing presence of AI-generated books, particularly in platforms like Amazon\'s Kindle marketplace</li>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <h2 style={{ color:'#e8e8e6', marginTop: 40, fontSize: 50, fontFamily: 'Segoe UI', fontWeight:'normal', marginBottom: 20 }}>Certification Process Challenges</h2>
                    <p style={{ color:'#e8e8e6', fontFamily: 'Segoe UI', fontWeight:'normal', fontSize: 22 }}>
                    The "Human Authored" label serves as a visual indicator on book covers, akin to literary award stickers or celebrity book
                    club endorsements, to help readers identify works written by humans rather than AI1. This certification
                      aims to address concerns about the influx of AI-generated content in e-bookstores and provide a quality
                      assurance measure for consumers. The Authors Guild hopes this label will:
                      <ul>
                        <li>Sway human readers to purchase works by human writers</li>
                        <li>Function similarly to organic or fair-trade labels on grocery items</li>
                        <li>Assist lesser-known authors in distinguishing their work in crowded marketplaces</li>
                        <li>Compete with the increasing presence of AI-generated books, particularly in platforms like Amazon\'s Kindle marketplace</li>
                        </ul>
                    </p>
                  </div>
                  <div>
                    <h2 style={{ color:'#e8e8e6', marginTop: 40, fontSize: 50, fontFamily: 'Segoe UI', fontWeight:'normal', marginBottom: 20 }}>Rationale for Initiative</h2>
                    <p style={{ color:'#e8e8e6', fontFamily: 'Segoe UI', fontWeight:'normal', fontSize: 22 }}>
                    The "Human Authored" label serves as a visual indicator on book covers, akin to literary award stickers or celebrity book
                    club endorsements, to help readers identify works written by humans rather than AI1. This certification
                      aims to address concerns about the influx of AI-generated content in e-bookstores and provide a quality
                      assurance measure for consumers. The Authors Guild hopes this label will:
                      <ul>
                        <li>Sway human readers to purchase works by human writers</li>
                        <li>Function similarly to organic or fair-trade labels on grocery items</li>
                        <li>Assist lesser-known authors in distinguishing their work in crowded marketplaces</li>
                        <li>Compete with the increasing presence of AI-generated books, particularly in platforms like Amazon\'s Kindle marketplace</li>
                        </ul>
                    </p>
                  </div>
                  <div>
                    <h2 style={{ color:'#e8e8e6', marginTop: 40, fontSize: 50, fontFamily: 'Segoe UI', fontWeight:'normal', marginBottom: 20 }}>Future Implications</h2>
                    <p style={{ color:'#e8e8e6', fontFamily: 'Segoe UI', fontWeight:'normal', fontSize: 22 }}>
                    The "Human Authored" label serves as a visual indicator on book covers, akin to literary award stickers or celebrity book
                    club endorsements, to help readers identify works written by humans rather than AI1. This certification
                      aims to address concerns about the influx of AI-generated content in e-bookstores and provide a quality
                      assurance measure for consumers. The Authors Guild hopes this label will:
                      <ul>
                        <li>Sway human readers to purchase works by human writers</li>
                        <li>Function similarly to organic or fair-trade labels on grocery items</li>
                        <li>Assist lesser-known authors in distinguishing their work in crowded marketplaces</li>
                        <li>Compete with the increasing presence of AI-generated books, particularly in platforms like Amazon\'s Kindle marketplace</li>
                        </ul>
                    </p>
                  </div>
                  <div className='related-articles'>
                    <div className='related-articles-header'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fak" data-icon="new-thread" class="svg-inline" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e8e8e6" d="M467.2 115.2H313.6v51.2H467.2V115.2zm25.6 153.6H262.4V320H492.8V268.8zM262.4 115.2H32v51.2H262.4V115.2zm0 102.4H32v51.2H262.4V217.6zm0 102.4H32v51.2H262.4V320zm230.4 51.2H262.4v51.2H492.8V371.2zM416 64H364.8V217.6H416V64z"></path></svg>
                    <h2>Related</h2>
                    </div>
                    <div class="related-article-card">
                        <a href="link-to-article1" class="read-more">How effective will the "Human Authored" label be in distinguishing human-written books from AI-generated ones</a>
                        <svg style= {{height:20, width:20, }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#29bccf" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path></svg>
                    </div>

                    <div class="related-article-card-even">
                        <a href="link-to-article2" class="read-more">What are the potential long-term impacts on the publishing industry if AI-generated content becomes more prevalent</a>
                        <svg style= {{height:20, width:20, }} aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus fa-fw " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#29bccf" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path></svg>
                    </div>

                    <div style={{ color:'#e8e8e6', backgroundColor: '#191a1a'}}className='keep-reading'>
                        <h2>Keep Reading</h2>
                        <div className='keep-reading-card-container'>
                            <div class="keep-reading-card">
                              <img src="https://pplx-res.cloudinary.com/image/upload/v1714606749/article_section_media_items/aigztqtjvmdixkypbejs.avif" alt="Article 1"/>
                              <h5>MIT Proposes Personhood Credentials</h5>
                              <p className='keep-reading-card-desc'>As artificial intelligence (AI) technologies rapidly evolve, the need of effective regulation becomes increasingly urgent.</p>
                              {/* <a href="link-to-article1" class="read-more">Read More</a> */}
                            </div>
                            <div class="keep-reading-card">
                              <img src="https://pplx-res.cloudinary.com/image/upload/v1714606749/article_section_media_items/aigztqtjvmdixkypbejs.avif" alt="Article 1"/>
                              <h5>Regulating AI: Balancing Innovation with Ethical Challenges</h5>
                              <p className='keep-reading-card-desc'>As artificial intelligence (AI) technologies rapidly evolve, the need of effective regulation becomes increasingly urgent</p>
                              {/* <a href="link-to-article1" class="read-more">Read More</a> */}
                            </div>
                            <div class="keep-reading-card">
                              <img src="https://pplx-res.cloudinary.com/image/upload/v1714606749/article_section_media_items/aigztqtjvmdixkypbejs.avif" alt="Article 1"/>
                              <h5>MIT Proposes Personhood Credentials</h5>
                              <p className='keep-reading-card-desc'>As artificial intelligence (AI) technologies rapidly evolve, the need of effective regulation becomes increasingly urgent</p>
                              {/* <a href="link-to-article1" class="read-more">Read More</a> */}
                            </div>
                            <div class="keep-reading-card">
                              <img src="https://pplx-res.cloudinary.com/image/upload/v1714606749/article_section_media_items/aigztqtjvmdixkypbejs.avif" alt="Article 1"/>
                              <h5>MIT Proposes Personhood Credentials</h5>
                              <p className='keep-reading-card-desc'>As artificial intelligence (AI) technologies rapidly evolve, the need of effective regulation becomes increasingly urgent</p>
                              {/* <a href="link-to-article1" class="read-more">Read More</a> */}
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div style={{paddingRight: 200}} className='topic-highlights'>
                <ul className='topic-highlights-list'>
                  <li>Introduction</li>
                  <li>Purpose of Human Authored Label</li>
                  <li>Certification Process Challenges</li>
                  <li>Rationale for Initiative</li>
                  <li>Future Implications</li>
                </ul>
              </div>
              <FloatingTextarea />
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;