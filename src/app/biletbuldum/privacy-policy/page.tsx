import { PolicyContent } from '@/components/PolicyContent';

const privacyPolicyContent = [
  "# Bilet Buldum Privacy Policy",
  "Last updated: January 4, 2024",
  "## 1. Information We Collect",
  "### 1.1 Personal Information",
  "We collect the following personal information to provide and improve our services:",
  "- Email address (for account creation and notifications)",
  "- First and last name (for personalized service)",
  "- Profile information (for account management)",
  "- Location data (when permitted, to enhance search results)",
  "- Device information (for service optimization and security)",
  "### 1.2 Usage Data",
  "We collect the following usage information to improve your experience:",
  "- App usage statistics and patterns",
  "- Search history and preferences",
  "- Ticket search alerts and preferences",
  "- Notification settings and preferences",
  "- Train and cabin class preferences",
  "- Departure and arrival station selections",
  "### 1.3 Technical Data",
  "We automatically collect:",
  "- Device type and operating system",
  "- App version information",
  "- IP address and network information",
  "- Time zone and language preferences",
  "## 2. How We Use Your Information",
  "### 2.1 Core Service Functionality",
  "- To provide and maintain our ticket search and alert service",
  "- To notify you about ticket availability in real-time",
  "- To process and manage your search alerts",
  "- To authenticate your identity and maintain account security",
  "### 2.2 Service Improvement",
  "- To analyze usage patterns and optimize user experience",
  "- To develop new features and services",
  "- To troubleshoot technical issues",
  "- To generate anonymous usage statistics",
  "### 2.3 Communication",
  "- To send ticket availability notifications",
  "- To provide customer support and respond to inquiries",
  "- To send service updates and important announcements",
  "- To communicate about your account status",
  "## 3. Data Storage and Security",
  "We implement industry-standard security measures to protect your personal information:",
  "- Secure data encryption in transit and at rest",
  "- Regular security audits and updates",
  "- Restricted access to personal information",
  "- Secure user authentication systems",
  "Your data is stored securely and accessed only when necessary to provide our services.",
  "## 4. Third-Party Services",
  "We use the following third-party services that may collect information:",
  "- Google Mobile Ads (for advertising services)",
  "- Authentication services (for secure login)",
  "- Analytics services (for app performance monitoring)",
  "- Push notification services (for alerts delivery)",
  "Each third-party service operates under its own privacy policy.",
  "## 5. Your Rights and Choices",
  "You have the following rights regarding your personal information:",
  "- Access your personal data and search history",
  "- Correct or update your personal information",
  "- Delete your account and associated data",
  "- Opt-out of marketing communications",
  "- Control notification preferences",
  "- Export your data in a portable format",
  "## 6. Children's Privacy",
  "Our service is not intended for use by children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.",
  "## 7. Changes to This Policy",
  "We may update our Privacy Policy periodically. We will notify you of any material changes by:",
  "- Posting the new Privacy Policy on this page",
  "- Sending you a notification about the changes",
  "- Updating the 'Last updated' date at the top of this policy",
  "## 8. Data Retention",
  "We retain your personal information for as long as necessary to:",
  "- Provide our services to you",
  "- Comply with legal obligations",
  "- Resolve disputes",
  "- Enforce our agreements",
  "## 9. International Data Transfers",
  "Your information may be transferred and processed in countries where our servers are located. By using our service, you consent to this transfer in accordance with this Privacy Policy.",
  "## 10. Contact Us",
  "If you have questions about this Privacy Policy or our privacy practices, please contact us at:",
  "support@biletbuldum.com",
  "We aim to respond to all inquiries within 48 hours."
];

export default function PrivacyPolicy() {
  return (
    <PolicyContent 
      title="Privacy Policy" 
      content={privacyPolicyContent} 
    />
  );
} 