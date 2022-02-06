export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const modalOverlayVariants = {
	hidden: { opacity: 0, transition: { duration: .2, delay: .2 } },
	visible: { opacity: 1, transition: { duration: .2 } }
}

export const staggerOne = {
	animate: { transition: { staggerChildren: .1 } }
}

export const modalFadeInUpVariants = {
	initial: { y: 60, opacity: 0, transition: { duration: .8, ease: defaultEasing } },
	animate: { y: 0, opacity: 1, transition: { duration: .8, ease: defaultEasing } }
};

export const modalVariants = {
	hidden: { opacity: 0, top: "100%", transition: { duration: .8, ease: defaultEasing } },
	visible: { opacity: 1, top: "50%", transition: { duration: .8, ease: defaultEasing } }
}