import { Metadata } from 'next';
import Script from 'next/script';
import FaqPageClient from './FaqPageClient';

const SITE_URL = 'https://www.back2nest.in';

export const metadata: Metadata = {
	title: 'FAQ - Fresh Milk Delivery in Patna | Back2Nest',
	description: 'Find answers to common questions about Back2Nest milk delivery in Patna. Serving Kankarbagh, Boring Road, Rajendra Nagar, and all areas of Patna.',
	keywords: [
		'milk delivery faq patna',
		'back2nest faq',
		'milk delivery kankarbagh',
		'milk delivery boring road',
		'milk delivery rajendra nagar',
		'patna milk delivery questions',
		'fresh milk patna',
		'a2 milk patna',
		'organic milk delivery bihar',
		'milk subscription patna'
	],
	openGraph: {
		title: 'FAQ - Fresh Milk Delivery in Patna | Back2Nest',
		description: 'Find answers to common questions about Back2Nest milk delivery in Patna. Serving all major areas.',
		url: `${SITE_URL}/faq`,
		type: 'website',
		images: [
			{
				url: `${SITE_URL}/milk.jpeg`,
				width: 1200,
				height: 630,
				alt: 'Back2Nest FAQ',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'FAQ - Fresh Milk Delivery in Patna | Back2Nest',
		description: 'Find answers to common questions about Back2Nest milk delivery in Patna.',
	},
	alternates: {
		canonical: `${SITE_URL}/faq`,
	},
};

const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'mainEntity': [
		{
			'@type': 'Question',
			'name': 'Is your milk available in Kankarbagh, Patna?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Yes! We deliver fresh farm milk to Kankarbagh and all major areas of Patna including Boring Road, Rajendra Nagar, Frazer Road, Bailey Road, and Exhibition Road. Download our app to check delivery availability in your specific location.'
			}
		},
		{
			'@type': 'Question',
			'name': 'What areas in Patna do you deliver to?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Back2Nest delivers across Patna including Kankarbagh, Boring Road, Rajendra Nagar, Bailey Road, Frazer Road, Exhibition Road, Ashok Rajpath, S.K. Puri, Anisabad, Patliputra Colony, and many more areas. We are constantly expanding our delivery zones.'
			}
		},
		{
			'@type': 'Question',
			'name': 'What time do you deliver milk in Patna?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'We deliver fresh milk every morning between 5:00 AM to 10:00 AM across Patna. You can schedule your preferred delivery time slot through our mobile app.'
			}
		},
		{
			'@type': 'Question',
			'name': 'Is your milk pure and organic?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Yes, absolutely! We provide 100% pure, farm-fresh milk sourced directly from local farms near Patna. Our milk is free from preservatives, additives, and adulteration. We also offer A2 milk from desi cows for health-conscious customers.'
			}
		},
		{
			'@type': 'Question',
			'name': 'How much does milk delivery cost in Patna?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Our milk prices are competitive and transparent. Regular cow milk starts from ₹60/liter, buffalo milk from ₹70/liter, and premium A2 milk from ₹85/liter. We also offer special discounts on subscription plans. Check our app for current offers and wallet recharge discounts.'
			}
		},
		{
			'@type': 'Question',
			'name': 'Do you offer subscription plans?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Yes! We offer flexible daily, weekly, and monthly subscription plans. You can pause, modify, or cancel your subscription anytime through our app. Subscription customers enjoy priority delivery and exclusive discounts.'
			}
		},
		{
			'@type': 'Question',
			'name': 'How do I place an order?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Download the Back2Nest app from Google Play Store, create an account, select your products and delivery preferences, and place your order. You can also call us at +91 89359 04820 for assistance.'
			}
		},
		{
			'@type': 'Question',
			'name': 'What payment methods do you accept?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), debit/credit cards, net banking, and cash on delivery. You can also recharge your Back2Nest wallet for faster checkout and avail exclusive wallet offers.'
			}
		},
		{
			'@type': 'Question',
			'name': 'Do you deliver other dairy products besides milk?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Yes! Besides fresh milk, we deliver dahi (curd), paneer, ghee, buttermilk, and other dairy products. All products are made from pure milk and delivered fresh to your doorstep in Patna.'
			}
		},
		{
			'@type': 'Question',
			'name': 'What is your refund policy?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'If you receive a damaged or unsatisfactory product, contact us immediately at +91 89359 04820 or help@back2nest.in. We will replace the product or issue a full refund as per our refund policy.'
			}
		},
		{
			'@type': 'Question',
			'name': 'Can I track my delivery?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'Yes! You can track your delivery in real-time through our mobile app. You will receive notifications when your order is out for delivery and when it arrives at your doorstep.'
			}
		},
		{
			'@type': 'Question',
			'name': 'Is there a minimum order value?',
			'acceptedAnswer': {
				'@type': 'Answer',
				'text': 'No, there is no minimum order value. You can order as little as 500ml of milk. However, we recommend subscribing to our plans for better convenience and savings.'
			}
		}
	]
};

export default function FAQPage() {
	return (
		<>
			<Script
				id="faq-schema"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema)
				}}
			/>
			<FaqPageClient />
		</>
	);
}
 
