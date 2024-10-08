import React from 'react';
import './TermsAndConditions.css'; // Import your CSS file
import DiyarahLogo from '/Images/Icons/QuemaLogo.png'

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions-container">
      <div className='overlay-image'></div>
      <header>
        <h1 className="terms-and-conditions-title">شروط وأحكام الاستخدام</h1>
      </header>

      <section>
        <p className="terms-and-conditions-text">
          نرحب بكم في صفحة شروط وأحكام الاستخدام لشركة القمة اللامعة . يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا. يعتبر استخدامكم للخدمات تأكيدًا على موافقتكم والالتزام بتلك الشروط والأحكام.
        </p>
      </section>

      <section>
        <h2>1. الاستخدام والوصول</h2>
        <p>نمنحكم ترخيصًا غير حصري وغير قابل للانتقال للوصول واستخدام خدماتنا وفقًا لهذه الشروط والأحكام. يجب عليكم عدم نقل أو مشاركة تفاصيل الوصول الخاصة بكم مع أي شخص آخر.</p>
      </section>

      <section>
        <h2>2. المحتوى والحقوق</h2>
        <p>جميع الحقوق الملكية الفكرية للمحتوى المقدم من خلال خدماتنا تعود إلى شركة القمة اللامعة. يجب عليكم عدم استخدام أو نسخ أو نشر أو نقل أي جزء من المحتوى دون إذن كتابي.</p>
      </section>

      <section>
        <h2>3. التزامات المستخدم</h2>
        <p>عند استخدام خدماتنا، يجب عليكم الامتناع عن نشر أو نقل أي محتوى يكون مسيئًا أو غير قانوني. نحتفظ بالحق في حظر الوصول لأي مستخدم يخالف هذه التزامات.</p>
      </section>

      <section>
        <h2>4. التعويض</h2>
        <p>أنتم توافقون على تعويض شركة القمة اللامعة وحمايتها من أي مطالبات أو خسائر ناتجة عن استخدامكم لخدماتنا أو انتهاككم لهذه الشروط والأحكام.</p>
      </section>

      <section>
      <h2>5. شكرًا لاستخدامكم خدماتنا</h2>
        <p>
         نقدر اختياركم لاستخدام خدماتنا في مجال العقارات. نحن نسعى دائمًا لتوفير تجربة ممتازة وفعّالة لمستخدمينا.
        </p>
      </section>
      <div id='plogoDiv'>
        <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
      </div>
    </div>
  );
};

export default TermsAndConditions;
