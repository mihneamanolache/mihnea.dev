import type { Metadata } from 'next';
import { PageHeader, H2, Body, LangSwitch } from '../../_components/PrayerPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Ekklesia',
  description: 'What data Ekklesia collects, why, and how it is protected. GDPR-compliant.',
};

export default function PrivacyEN() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        updated="Last updated: May 1, 2026"
        langSwitch={<LangSwitch active="en" />}
      />

      <Body>
        <p>
          Ekklesia (the &quot;app&quot;) is a mobile application for Orthodox Christian parishes,
          built to support the spiritual life of the community. This policy explains
          what data we collect, why, and how we keep it.
        </p>

        <H2>1. Data we collect</H2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Phone number</strong> — for SMS one-time-code authentication. Provider: Twilio Inc.</li>
          <li><strong>Display name</strong> — to appear in the parish directory.</li>
          <li><strong>Email (optional)</strong> — only if you choose to add it to your profile.</li>
          <li><strong>Parish membership</strong> — your parish code.</li>
          <li><strong>Prayer requests submitted</strong> — visible to the parish only after the priest&apos;s blessing.</li>
          <li><strong>Push notification token</strong> — for liturgical announcements and reminders.</li>
        </ul>

        <H2>2. What we do NOT collect</H2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Your location</li>
          <li>Your contacts</li>
          <li>Web browsing history</li>
          <li>Biometric data</li>
          <li>Payment or banking data</li>
          <li>Advertising identifiers (IDFA / GAID)</li>
        </ul>

        <H2>3. Why we collect this data</H2>
        <p>
          Only for app functionality: authentication, parish community, liturgical
          notifications. We do not use your data for advertising, behavioral profiling,
          or sale to third parties.
        </p>

        <H2>4. Third-party providers</H2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Supabase Inc.</strong> — database and authentication. Servers in Frankfurt, Germany (EU). <a className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]" href="https://supabase.com/privacy" target="_blank" rel="noopener">Supabase privacy policy</a></li>
          <li><strong>Twilio Inc.</strong> — sending SMS codes. <a className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]" href="https://www.twilio.com/legal/privacy" target="_blank" rel="noopener">Twilio privacy policy</a></li>
          <li><strong>Apple / Google</strong> — push notification delivery (APNs / FCM). Notification payloads are not directly accessible to these companies.</li>
        </ul>

        <H2>5. Your rights (GDPR)</H2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Request a copy of your data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent</li>
          <li>Object to processing</li>
          <li>Lodge a complaint with the National Supervisory Authority for Personal Data Processing (ANSPDCP, Romania)</li>
        </ul>

        <H2>6. Data retention</H2>
        <p>
          Your data is kept as long as your account is active. Upon request, we delete
          all data associated with your account within 30 days.
        </p>

        <H2>7. Security</H2>
        <p>
          All communications use HTTPS / TLS. Passwords are not stored (SMS OTP only).
          Row-Level Security policies restrict access to your parish&apos;s data.
        </p>

        <H2>8. Minors</H2>
        <p>
          The app is not intended for children under 13. We do not knowingly collect
          data from minors under 13 without parental consent.
        </p>

        <H2>9. Changes</H2>
        <p>
          We will announce any material changes to this policy via in-app notification
          and email (if you have one in your profile).
        </p>

        <H2>10. Contact</H2>
        <p>
          For any question regarding personal data:{' '}
          <a className="text-[#c9a96e] border-b-[0.5px] border-[#3a2a14]" href="mailto:mihnea.manolache@yahoo.com">mihnea.manolache@yahoo.com</a>
        </p>
      </Body>
    </>
  );
}
