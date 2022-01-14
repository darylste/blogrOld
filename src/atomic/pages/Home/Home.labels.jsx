import React from 'react';
import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../layout/Spacer/Spacer.component';

export const labels = {
	intro: (
		<React.Fragment>
			<Typography type='subtitle'>Introducing an extensible editor</Typography>

			<Spacer top='xs' btm='med' right='lg'>
				<Typography type='body'>
					Blogr features an exceedingly intuitive interface which lets you focus
					on one thing: creating content. The editor supports management of
					multiple blogs and allows easy manipulation of embeds such as images,
					videos, and Markdown. Extensibility with plugins and themes provide
					easy ways to add functionality or change the looks of a blog.
				</Typography>
			</Spacer>

			<Typography type='subtitle'>Robust content management</Typography>
			<Spacer top='xs' btm='xl' right='lg'>
				<Typography type='body'>
					Flexible content management enables users to easily move through
					posts. Increase the usability of your blog by adding customized
					categories, sections, format, or flow. With this functionality,
					you&apos;re in full control.
				</Typography>
			</Spacer>
		</React.Fragment>
	),
	features: (
		<React.Fragment>
			<Typography type='subtitle'>Free, open, simple </Typography>

			<Spacer top='xs' btm='med' right='xl'>
				<Typography type='body'>
					Blogr is a free and open source application backed by a large
					community of helpful developers. It supports features such as code
					syntax highlighting, RSS feeds, social media integration, third-party
					commenting tools, and works seamlessly with Google Analytics. The
					architecture is clean and is relatively easy to learn.
				</Typography>
			</Spacer>

			<Typography type='subtitle'>Powerful tooling</Typography>
			<Spacer top='xs' btm='xl' right='xl'>
				<Typography type='body'>
					Batteries included. We built a simple and straightforward CLI tool
					that makes customization and deployment a breeze, but capable of
					producing even the most complicated sites.
				</Typography>
			</Spacer>
		</React.Fragment>
	),
};

export const navItems = [
	{
		title: 'Product',
		dropdownItems: [
			{ text: 'Overview' },
			{ text: 'Pricing' },
			{ text: 'Marketplace' },
			{ text: 'Features' },
			{ text: 'Integrations' },
		],
	},
	{
		title: 'Company',
		dropdownItems: [
			{ text: 'About' },
			{ text: 'Team' },
			{ text: 'Blog' },
			{ text: 'Careers' },
		],
	},
	{
		title: 'Connect',
		dropdownItems: [
			{ text: 'Contact' },
			{ text: 'Newsletter' },
			{ text: 'LinkedIn' },
		],
	},
];
