<template>
  <div class="col-12 col-lg-6 m-b-50 order-2 order-lg-1">
    <!-- Section Title Start -->
    <div class="contact-title p-b-15">
      <h2 class="title">Gửi yêu cầu</h2>
    </div>
    <!-- Section Title End -->

    <!-- Contact Form Wrapper Start -->
    <div class="contact-form-wrapper contact-form">
      <form id="contactForm" action="" method="post">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-md-6">
                <div class="input-area m-b-20">
                  <input
                    class="input-item form-control"
                    type="text"
                    placeholder="Họ Tên *"
                    name="name"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="input-area m-b-20">
                  <input
                    class="input-item form-control"
                    type="email"
                    placeholder="Email *"
                    name="email"
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="input-area m-b-20">
                  <input
                    class="input-item form-control"
                    type="text"
                    placeholder="Chủ đề *"
                    name="subject"
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="input-area m-b-40">
                  <textarea
                    cols="30"
                    rows="5"
                    class="textarea-item form-control"
                    name="message"
                    placeholder="Tin nhắn"
                  ></textarea>
                </div>
              </div>

              <div class="col-12">
                <button
                  id="submit"
                  type="submit"
                  name="submit"
                  class="btn btn-primary btn-hover-dark"
                >
                  Submit
                </button>
              </div>
              <p class="col-8 form-message mb-0"></p>
            </div>
          </div>
        </div>
      </form>
      <p class="form-messege"></p>
    </div>
    <!-- Contact Form Wrapper End -->
  </div>
</template>
