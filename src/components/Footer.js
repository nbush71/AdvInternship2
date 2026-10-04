function Footer() {
  return (
   <footer className="w-full flex bg-brand-footer md:justify-between">
      <div className=" p-6 w-full h-105 md:w-5xl">
        <div className="grid grid-cols-1 w-full sm:col-span-2 md:col-span-4 p-12 mx-auto justify-between gap-6 md:gap-10">
          <div className="flex flex-4 justify-between content-center place-content-center">            
            <div className="block justify-between text-[14px] content-center ">
              <div className="font-bold text-2xl pb-6 text-brand-darkteal">Actions</div>
              <div className="block flex-col">
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Summarist Magazine</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Cancel Subscription</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Help</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Contact us</a>
                </div>
              </div>
            </div>

            <div className="block gap-4 justify-between">
              <div className="font-bold text-2xl min-w-30 text-brand-darkteal flex flex-col md:text-sm pb-6">Useful Links</div>
              <div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Pricing</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Summarist Business</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Gift Cards</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Authors & Publishers</a>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="font-bold text-2xl text-brand-darkteal pb-6">Company</div>
              <div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">About</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Careers</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Partners</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Code of Conduct</a>
                </div>
              </div>
            </div>

            <div className="block">
              <div className="font-bold text-2xl text-brand-darkteal pb-6">Other</div>
              <div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Sitemap</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Legal Notice</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Terms of Service</a>
                </div>
                <div className="mb-4">
                  <a className="text-lg text-brand-links cursor-not-allowed" href="#">Privacy Policies</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center items-center text-center mt-8 ">
            <div className="flex flex-col w-full max-w-300 place-content-center text-xl font-bold text-brand-darkteal">
              Copyright &copy; 2023 Summarist.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;