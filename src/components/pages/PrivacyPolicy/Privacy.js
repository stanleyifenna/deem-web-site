import React, { useEffect } from "react";
import "./Privacy.css";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";

const style = {
  height: 40,
  width: 40,
  lineHeight: "45px",
  borderRadius: 4,
  backgroundColor: "#ffffff",
  color: "#1A71FF",
  textAlign: "center",
  fontSize: 20,
  border: "0.5px solid #1A71FF",
};

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="privacy-deempay">
        <h2 className="privacy_privacy">Privacy</h2>
        <h2 className="updated">Effective Date October 2021</h2>
      </div>
      <div className="privacy-section">
        <p className="privacy-interpretation">
          Thank you for choosing to be part of our esteem customers at DeemPay
          Technology Limited, doing business as DeemPay Technology Limited and
          DeemPay ("DeemPay," "we," "us," or "our"). We are committed to
          protecting your personal information and your right to privacy. If you
          have any questions or concerns about this privacy notice or our
          practices with regard to your personal information, please contact us
          at hello@deempay.com.
        </p>
        <p className="privacy-interpretations">
          In this privacy notice, if we refer to:
        </p>
        <p className="privacy-hints">
          ■ "Website," we are referring to any website of ours that references
          or links to this policy
        </p>
        <p className="privacy-hints">
          ■ "App," we are referring to any application of ours that references
          or links to this policy, including any listed above
        </p>
        <p className="privacy-hints">
          ■ "Services," we are referring to our Website, App, and other related
          services, including any sales, marketing, or events
        </p>
        <p className="privacy-interpretations">
          The purpose of this privacy notice is to explain to you in the
          clearest way possible what information we collect, how we use it, and
          what rights you have in relation to it. If there are any terms in this
          privacy notice that you do not agree with, please discontinue use of
          our Services immediately.
        </p>
        <p className="privacy-interpretations">
          Please read this privacy notice carefully, as it will help you
          understand what we do with the information that we collect.
        </p>
        
        <h2 className="privacy-definitions">WHAT INFORMATION DO WE COLLECT?</h2>
        <p className="privacy-interpretations">
          We collect personal information that you voluntarily provide to us
          when you register on the services, express an interest in obtaining
          information about us or our products and services when you participate
          in activities on the services or otherwise when you contact us.
        </p>
        <p className="privacy-interpretations">
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make, and
          the products and features you use. The personal information we collect
          may include the following:
        </p>
        <p className="privacy-interpretations">
          Personal Information Provided by You. We collect names; phone numbers;
          email addresses; passwords; gender; birthday; id number; business
          type; business name; business category; business section; state; city;
          bank; bank account number; BVN; and other similar information.
        </p>
        <p className="privacy-interpretations">
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>
        <h2 className="privacy-definitions">
          Information collected through our App
        </h2>
        <p className="privacy-interpretations">
          If you use our App, we also collect the following information:
        </p>
        <p className="privacy-hints">
          ■ Geolocation Information. We may request access or permission to and
          track location-based information from your mobile device, either
          continuously or while you are using our App, to provide certain
          location-based services and for security check. If you wish to change
          our access or permissions, you may do so in your device's settings.
        </p>
        <p className="privacy-hints">
          ■ Mobile Device Access. We may request access or permission to certain
          features from your mobile device, including your mobile device's
          camera, contacts, SMS messages, storage, gallery, and other features.
          If you wish to change our access or permissions, you may do so in your
          device's settings.
        </p>
        <p className="privacy-hints">
          ■ Push Notifications. We may request to send you push notifications
          regarding your account or certain features of the App. If you wish to
          opt-out from receiving these types of communications, you may turn
          them off in your device's settings.
        </p>

        <p className="privacy-interpretations">
          This information is primarily needed to maintain the security and
          operation of our App, for troubleshooting and for our internal
          analytics and reporting purposes.
        </p>
        <h2 className="privacy-definitions">HOW DO WE USE YOUR INFORMATION?</h2>

        <p className="privacy-interpretations">
          We use personal information collected via our Services for a variety
          of business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations. We
          indicate the specific processing grounds we rely on next to each
          purpose listed below.
        </p>
        <p className="privacy-interpretations">
          We use the information we collect or receive:
        </p>

        <p className="privacy-hints">
          ■ To facilitate account creation and logon process.
        </p>

        <p className="privacy-hints">■ To generate QR code for you.</p>

        <p className="privacy-hints">■ To settle money to your bank account</p>

        <p className="privacy-hints">
          ■ Request feedback. We may use your information to request feedback
          and to contact you about your use of our Services.
        </p>

        <p className="privacy-hints">
          ■ To manage user accounts. We may use your information for the
          purposes of managing our account and keeping it in working order.
        </p>

        <p className="privacy-hints">
          ■ To send administrative information to you. We may use your personal
          information to send you product, service and new feature information
          and/or information about changes to our terms, conditions, and
          policies.
        </p>

        <p className="privacy-hints">
          ■ To protect our Services. We may use your information as part of our
          efforts to keep our Services safe and secure (for example, for fraud
          monitoring and prevention).
        </p>

        <p className="privacy-hints">
          ■ To enforce our terms, conditions and policies for business purposes,
          to comply with legal and regulatory requirements or in connection with
          our contract.
        </p>

        <p className="privacy-hints">
          ■ To respond to legal requests and prevent harm. If we receive a
          subpoena or other legal request, we may need to inspect the data we
          hold to determine how to respond.
        </p>
        <p className="privacy-hints">
          ■ Fulfill and manage your orders. We may use your information to
          fulfill and manage your orders, payments, returns, and exchanges made
          through the Services.
        </p>

        <p className="privacy-hints">
          ■ Administer prize draws and competitions. We may use your information
          to administer prize draws and competitions when you elect to
          participate in our competitions.
        </p>
        <p className="privacy-hints">
          ■ To deliver and facilitate delivery of services to the user. We may
          use your information to provide you with the requested service.
        </p>

        <p className="privacy-hints">
          ■ To respond to user inquiries/offer support to users. We may use your
          information to respond to your inquiries and solve any potential
          issues you might have with the use of our Services.
        </p>

        <h2 className="privacy-definitions">
          WILL YOUR INFORMATION BE SHARED WITH ANYONE?
        </h2>

        <p className="privacy-interpretations">
          We may process or share your data that we hold based on the following
          legal basis:
        </p>
        <p className="privacy-hints">
          ■ With Payment Service Providers: We may share your personal
          information with our payment service providers to enable us process
          your payment request.
        </p>
        <p className="privacy-hints">
          ■ Consent: We may process your data if you have given us specific
          consent to use your personal information for a specific purpose.
        </p>
        <p className="privacy-hints">
          ■ Legitimate Interests: We may process your data when it is reasonably
          necessary to achieve our legitimate business interests.
        </p>
        <p className="privacy-hints">
          ■ Performance of a Contract: Where we have entered into a contract
          with you, we may process your personal information to fulfill the
          terms of our contract.
        </p>
        <p className="privacy-hints">
          ■ Legal Obligations: We may disclose your information where we are
          legally required to do so in order to comply with applicable law,
          governmental requests, a judicial proceeding, court order, or legal
          process, such as in response to a court order or a subpoena (including
          in response to public authorities to meet national security or law
          enforcement requirements).
        </p>
        <p className="privacy-hints">
          ■ Vital Interests: We may disclose your information where we believe
          it is necessary to investigate, prevent, or act regarding potential
          violations of our policies, suspected fraud, situations involving
          potential threats to the safety of any person and illegal activities,
          or as evidence in litigation in which we are involved.
        </p>

        <p className="privacy-interpretations">
          More specifically, we may need to process your data or share your
          personal information in the following situations:
        </p>

        <p className="privacy-hints">
          ■ Business Transfers. We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </p>
        <p className="privacy-hints">
          ■ Vendors, Consultants and Other Third-Party Service Providers. We may
          share your data with third-party vendors, service providers,
          contractors or agents who perform services for us or on our behalf and
          require access to such information to do that work. Examples include:
          payment processing, data analysis, email delivery, hosting services,
          customer service and marketing efforts. We may allow selected third
          parties to use tracking technology on the Services, which will enable
          them to collect data on our behalf about how you interact with our
          Services over time. This information may be used to, among other
          things, analyze and track data, determine the popularity of certain
          content, pages or features, and better understand online activity.
          Unless described in this notice, we do not share, sell, rent or trade
          any of your information with third parties for their promotional
          purposes.
        </p>
        <p className="privacy-hints">
          ■ Affiliates. We may share your information with our affiliates, in
          which case we will require those affiliates to honor this privacy
          notice. Affiliates include our parent company and any subsidiaries,
          joint venture partners or other companies that we control or that are
          under common control with us.
        </p>

        <p className="privacy-hints">
          ■ Business Partners. We may share your information with our business
          partners to offer you certain products, services or promotions.
        </p>

        <h2 className="privacy-definitions">
          WHO WILL YOUR INFORMATION BE SHARED WITH?
        </h2>
        <p className="privacy-interpretations">
          We only share and disclose your information with the following
          categories of third parties.
        </p>

        <p className="privacy-hints">■ Cloud Computing Services</p>
        <p className="privacy-hints">■ Communication & Collaboration Tools</p>

        <p className="privacy-hints">■ Data Analytics Services</p>
        <p className="privacy-hints">■ Finance & Accounting Tools</p>
        <p className="privacy-hints">■ Government Entities</p>

        <p className="privacy-hints">■ Payment Processors</p>

        <p className="privacy-hints">
          ■ User Account Registration & Authentication Services
        </p>

        <h2 className="privacy-definitions">
          HOW LONG DO WE KEEP YOUR INFORMATION?
        </h2>
        <p className="privacy-interpretations">
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements).
        </p>
        <p className="privacy-interpretations">
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>

        <h2 className="privacy-definitions">
          HOW DO WE KEEP YOUR INFORMATION SAFE?
        </h2>

        <p className="privacy-interpretations">
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure, so
          we cannot promise or guarantee that hackers, cybercriminals, or other
          unauthorized hird parties will not be able to defeat our security, and
          improperly collect, access, steal, or modify your information.
          Although we will do our best to protect your personal information,
          transmission of personal information to and from our Services is at
          your own risk. You should only access the Services within a secure
          environment.
        </p>

        <h2 className="privacy-definitions">
          DO WE COLLECT INFORMATION FROM MINORS?
        </h2>

        <p className="privacy-interpretations">
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent’s use of the Services. If we learn
          that personal information from users less than 18 years of age has
          been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at hello@deempay.com.
        </p>
        <h2 className="privacy-definitions">WHAT ARE YOUR PRIVACY RIGHTS?</h2>

        <p className="privacy-interpretations">
          You may review, change, or terminate your account at any time. If you
          have questions or comments about your privacy rights, you may email us
          at hello@deempay.com.
        </p>
        <h2 className="privacy-definitions">Account Information</h2>

        <p className="privacy-interpretations">
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </p>
        <p className="privacy-hints">
          ■ Log in to your account settings and update your user account.
        </p>

        <p className="privacy-interpretations">
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          Terms of Use and/or comply with applicable legal requirements.
        </p>

        <h2 className="privacy-definitions">
          DO WE MAKE UPDATES TO THIS NOTICE?
        </h2>

        <p className="privacy-interpretations">
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </p>
        <h2 className="privacy-definitions">
          HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </h2>

        <p className="privacy-interpretations">
          If you have questions or comments about this notice, you may email us
          at hello@deempay.com or by post to:
        </p>
        <p className="privacy-interpretations">DeemPay Technology Limited</p>
        <p className="privacy-interpretations">
          294 Herbert Macaulay Way, Yaba , Lagos
        </p>
        <p className="privacy-interpretations">Lagos, Lagos 101212</p>
        <p className="privacy-interpretations">Nigeria</p>
      </div>
      <BackTop>
        <div style={style}>
          <div className="">{<FaAngleUp />}</div>
        </div>
      </BackTop>
    </div>
  );
}

export default Privacy;
