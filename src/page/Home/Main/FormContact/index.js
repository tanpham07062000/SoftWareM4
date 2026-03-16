const FormContact=()=>{
  return (
    <>
    <div class="contact-form">
        <div class="container">
            <div class="inner-wrap">
                <form action="">
                    <div class="box-head">
                        <h3 class="inner-sub-title">Estimate For Projects</h3>
                        <h2 class="inner-title">Share Work Details</h2>
                    </div>

                    <div class="inner-form-wrap">
                        <input type="text" placeholder="Full name"/>
                        <input type="text" placeholder="Email adress"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea placeholder="Work Details"></textarea>
                    </div>
                    <div class="inner-button">
                        <button class="button button-dark">Subscribe Now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  );
}
export default FormContact;