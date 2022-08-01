import Image from 'next/image';
import feature1 from '../../assets/images/feature-1.png';
import michaelPng from '../../assets/images/michael.png';

const airbnSvg = (
	<svg
		className='h-9 hover:text-gray-900 dark:hover:text-white'
		viewBox='0 0 125 35'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M64.828 7.11521C64.828 8.52061 63.6775 9.65275 62.2492 9.65275C60.8209 9.65275 59.6704 8.52061 59.6704 7.11521C59.6704 5.70981 60.7813 4.57766 62.2492 4.57766C63.7171 4.6167 64.828 5.74883 64.828 7.11521ZM54.1953 12.2293C54.1953 12.4636 54.1953 12.854 54.1953 12.854C54.1953 12.854 52.9655 11.2923 50.3469 11.2923C46.0225 11.2923 42.6502 14.5327 42.6502 19.0221C42.6502 23.4726 45.9829 26.7518 50.3469 26.7518C53.0051 26.7518 54.1953 25.1513 54.1953 25.1513V25.815C54.1953 26.1272 54.4334 26.3615 54.7508 26.3615H57.9644V11.6828C57.9644 11.6828 55.0285 11.6828 54.7508 11.6828C54.4334 11.6828 54.1953 11.956 54.1953 12.2293ZM54.1953 21.6378C53.6002 22.4966 52.41 23.2383 50.9818 23.2383C48.4426 23.2383 46.4985 21.6768 46.4985 19.0221C46.4985 16.3675 48.4426 14.806 50.9818 14.806C52.3703 14.806 53.6399 15.5867 54.1953 16.4065V21.6378ZM60.3448 11.6828H64.1535V26.3615H60.3448V11.6828ZM117.237 11.2923C114.619 11.2923 113.389 12.854 113.389 12.854V4.6167H109.58V26.3615C109.58 26.3615 112.516 26.3615 112.794 26.3615C113.111 26.3615 113.349 26.0882 113.349 25.815V25.1513C113.349 25.1513 114.579 26.7518 117.198 26.7518C121.522 26.7518 124.895 23.4726 124.895 19.0221C124.895 14.5717 121.522 11.2923 117.237 11.2923ZM116.603 23.1993C115.135 23.1993 113.984 22.4575 113.389 21.5986V16.3675C113.984 15.5867 115.254 14.7668 116.603 14.7668C119.142 14.7668 121.086 16.3284 121.086 18.9831C121.086 21.6378 119.142 23.1993 116.603 23.1993ZM107.597 17.6557V26.4005H103.788V18.0852C103.788 15.6648 102.994 14.6888 100.852 14.6888C99.7015 14.6888 98.5113 15.2744 97.7574 16.1332V26.3615H93.9488V11.6828H96.964C97.2814 11.6828 97.5195 11.956 97.5195 12.2293V12.854C98.6302 11.7218 100.098 11.2923 101.566 11.2923C103.233 11.2923 104.621 11.7609 105.732 12.6977C107.081 13.7908 107.597 15.1962 107.597 17.6557ZM84.7048 11.2923C82.0862 11.2923 80.8564 12.854 80.8564 12.854V4.6167H77.0476V26.3615C77.0476 26.3615 79.9834 26.3615 80.2611 26.3615C80.5787 26.3615 80.8166 26.0882 80.8166 25.815V25.1513C80.8166 25.1513 82.0465 26.7518 84.665 26.7518C88.9895 26.7518 92.3617 23.4726 92.3617 19.0221C92.4015 14.5717 89.0292 11.2923 84.7048 11.2923ZM84.0699 23.1993C82.602 23.1993 81.4515 22.4575 80.8564 21.5986V16.3675C81.4515 15.5867 82.721 14.7668 84.0699 14.7668C86.6091 14.7668 88.5531 16.3284 88.5531 18.9831C88.5531 21.6378 86.6091 23.1993 84.0699 23.1993ZM73.7547 11.2923C74.9052 11.2923 75.5003 11.4876 75.5003 11.4876V14.9621C75.5003 14.9621 72.3264 13.908 70.3427 16.1332V26.4005H66.534V11.6828C66.534 11.6828 69.4699 11.6828 69.7476 11.6828C70.065 11.6828 70.3029 11.956 70.3029 12.2293V12.854C71.0171 12.0342 72.5644 11.2923 73.7547 11.2923ZM32.4423 24.4806C32.2699 24.0722 32.0976 23.6297 31.9252 23.2554C31.6493 22.6427 31.3736 22.0641 31.1322 21.5197L31.0978 21.4855C28.719 16.3804 26.1678 11.2073 23.4787 6.10219L23.3752 5.89799C23.0995 5.38748 22.8237 4.84294 22.5479 4.29839C22.2031 3.68577 21.8584 3.03913 21.3068 2.42652C20.2036 1.06516 18.6177 0.316406 16.9284 0.316406C15.2046 0.316406 13.6533 1.06516 12.5156 2.35845C11.9985 2.97107 11.6192 3.61771 11.2745 4.23032C10.9987 4.77486 10.7229 5.31941 10.4471 5.82992L10.3436 6.03413C7.68904 11.1392 5.10339 16.3124 2.7246 21.4175L2.69012 21.4855C2.44879 22.0301 2.17299 22.6087 1.89719 23.2214C1.72481 23.5957 1.55244 24.0041 1.38006 24.4466C0.93188 25.7058 0.793978 26.897 0.966355 28.1222C1.34558 30.6748 3.06935 32.8189 5.44815 33.7719C6.3445 34.1463 7.27534 34.3164 8.24065 34.3164C8.51645 34.3164 8.8612 34.2824 9.137 34.2483C10.2747 34.1122 11.4468 33.7378 12.5845 33.0912C13.9981 32.3083 15.3425 31.1852 16.8595 29.5517C18.3764 31.1852 19.7554 32.3083 21.1344 33.0912C22.2721 33.7378 23.4443 34.1122 24.5819 34.2483C24.8577 34.2824 25.2025 34.3164 25.4782 34.3164C26.4436 34.3164 27.4089 34.1463 28.2708 33.7719C30.6841 32.8189 32.3733 30.6408 32.7526 28.1222C33.0283 26.931 32.8904 25.7398 32.4423 24.4806ZM16.9259 25.893C15.1377 23.6468 13.9786 21.5327 13.5812 19.7488C13.4156 18.9891 13.3825 18.3284 13.4818 17.7338C13.5481 17.2053 13.7467 16.7429 14.0118 16.3465C14.6409 15.4546 15.7007 14.893 16.9259 14.893C18.1512 14.893 19.2441 15.4216 19.8402 16.3465C20.1051 16.7429 20.3037 17.2053 20.37 17.7338C20.4694 18.3284 20.4363 19.0221 20.2707 19.7488C19.8733 21.4995 18.7142 23.6136 16.9259 25.893ZM30.3665 27.6033C30.1305 29.3326 28.9509 30.8293 27.2993 31.4945C26.4903 31.8269 25.6139 31.9267 24.7376 31.8269C23.895 31.7273 23.0523 31.4611 22.176 30.9623C20.9624 30.2971 19.749 29.2662 18.3334 27.7363C20.558 25.0424 21.9062 22.5813 22.4118 20.3864C22.6477 19.3554 22.6815 18.4242 22.5804 17.5595C22.4456 16.7281 22.1422 15.9632 21.6703 15.298C20.6255 13.8014 18.8727 12.9367 16.9178 12.9367C14.9628 12.9367 13.21 13.8347 12.1652 15.298C11.6933 15.9632 11.39 16.7281 11.2551 17.5595C11.1203 18.4242 11.154 19.3887 11.4237 20.3864C11.9293 22.5813 13.3112 25.0757 15.5021 27.7695C14.1202 29.2994 12.873 30.3304 11.6596 30.9955C10.7832 31.4945 9.94059 31.7605 9.09795 31.8603C8.18787 31.9599 7.31152 31.8269 6.53628 31.5277C4.88468 30.8625 3.70497 29.366 3.46902 27.6365C3.36791 26.8051 3.43531 25.9737 3.77238 25.0424C3.8735 24.7098 4.04202 24.3774 4.21055 23.9782C4.4465 23.4461 4.71615 22.8807 4.9858 22.3153L5.0195 22.2489C7.34523 17.2935 9.83948 12.2383 12.4349 7.31623L12.536 7.11668C12.8056 6.61782 13.0753 6.0857 13.3449 5.58684C13.6146 5.05472 13.9179 4.55585 14.2886 4.12351C14.9965 3.32532 15.9403 2.89298 16.9852 2.89298C18.03 2.89298 18.9738 3.32532 19.6817 4.12351C20.0524 4.55585 20.3557 5.05472 20.6255 5.58684C20.8951 6.0857 21.1647 6.61782 21.4343 7.11668L21.5355 7.31623C24.0971 12.2716 26.5914 17.3267 28.9171 22.2821V22.3153C29.1867 22.8475 29.4227 23.4461 29.6924 23.9782C29.8609 24.3774 30.0294 24.7098 30.1305 25.0424C30.4003 25.9071 30.5013 26.7385 30.3665 27.6033Z'
			fill='currentColor'
		/>
	</svg>
);
const googleSvg = (
	<svg
		className='h-9 hover:text-gray-900 dark:hover:text-white'
		viewBox='0 0 86 29'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.6008 10.2627V13.2312L18.6907 13.2281C18.4733 14.8653 17.9215 16.0641 17.0826 16.9031C16.0487 17.9378 14.4351 19.0766 11.6008 19.0766C7.23238 19.0766 3.81427 15.5531 3.81427 11.1808C3.81427 6.80853 7.23238 3.28487 11.6008 3.28487C13.9585 3.28487 15.6794 4.21232 16.9503 5.40473L19.0432 3.31011C17.2721 1.6161 14.9144 0.316406 11.6036 0.316406C5.62156 0.316406 0.589844 5.19338 0.589844 11.1808C0.589844 17.1682 5.62156 22.0451 11.6036 22.0451C14.8322 22.0451 17.2694 20.9852 19.1756 18.9979C21.1362 17.0356 21.7451 14.2818 21.7451 12.0546C21.7451 11.3921 21.6949 10.7802 21.5974 10.2627H11.6008ZM71.4046 21.6192V1.11445H68.4101V21.6192H71.4046ZM29.9511 22.0482C33.8151 22.0482 36.9643 19.0797 36.9643 15.0513C36.9643 10.9945 33.8151 8.05451 29.9511 8.05451C26.0857 8.05451 22.9365 10.9945 22.9365 15.0513C22.9365 19.0797 26.0857 22.0482 29.9511 22.0482ZM29.9511 10.8116C32.0691 10.8116 33.8945 12.534 33.8945 15.0513C33.8945 17.5404 32.0691 19.2911 29.9511 19.2911C27.833 19.2911 26.0076 17.5435 26.0076 15.0513C26.0076 12.534 27.833 10.8116 29.9511 10.8116ZM45.0825 22.0482C48.9465 22.0482 52.0957 19.0797 52.0957 15.0513C52.0957 10.9945 48.9465 8.05451 45.0825 8.05451C41.2171 8.05451 38.0679 10.9977 38.0679 15.0513C38.0679 19.0797 41.2171 22.0482 45.0825 22.0482ZM45.0825 10.8116C47.2005 10.8116 49.0259 12.534 49.0259 15.0513C49.0259 17.5404 47.2005 19.2911 45.0825 19.2911C42.9644 19.2911 41.139 17.5435 41.139 15.0513C41.139 12.534 42.9644 10.8116 45.0825 10.8116ZM66.5972 8.48038V21.0387C66.5972 26.2059 63.5512 28.3164 59.9519 28.3164C56.563 28.3164 54.523 26.0482 53.7539 24.1934L56.4265 23.0798C56.903 24.2186 58.0694 25.5624 59.9477 25.5624C62.2525 25.5624 63.6807 24.1397 63.6807 21.4615V20.4552H63.5734C62.8865 21.3037 61.5627 22.0451 59.892 22.0451C56.3958 22.0451 53.1923 18.9977 53.1923 15.0766C53.1923 11.1271 56.3958 8.05451 59.892 8.05451C61.5585 8.05451 62.8837 8.79579 63.5734 9.6192H63.6807V8.48038H66.5972ZM63.8981 15.0766C63.8981 12.6129 62.2553 10.8116 60.1651 10.8116C58.0471 10.8116 56.2732 12.6129 56.2732 15.0766C56.2732 17.5152 58.0471 19.2911 60.1651 19.2911C62.2553 19.2911 63.8981 17.5152 63.8981 15.0766ZM83.0747 17.3542L85.4575 18.9442C84.6883 20.083 82.835 22.0451 79.6315 22.0451C75.6602 22.0451 72.6935 18.9726 72.6935 15.0483C72.6935 10.8874 75.6853 8.05143 79.2887 8.05143C82.9172 8.05143 84.6911 10.941 85.2721 12.5026L85.5898 13.2976L76.2426 17.1713C76.9589 18.5751 78.0708 19.2912 79.6315 19.2912C81.1949 19.2912 82.2804 18.5215 83.0747 17.3542ZM75.7382 14.8369L81.9864 12.2407C81.6436 11.3668 80.6097 10.758 79.3918 10.758C77.8326 10.758 75.6602 12.1366 75.7382 14.8369Z'
			fill='currentColor'
		/>
	</svg>
);
const microsoftSvg = (
	<svg
		className='h-8 hover:text-gray-900 dark:hover:text-white'
		viewBox='0 0 151 34'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'>
		<g clipPath='url(#clip0_3753_27919)'>
			<path
				d='M150.059 16.1144V13.4753H146.783V9.37378L146.673 9.40894L143.596 10.3464H143.538V13.4519H138.682V11.7175C138.682 10.9207 138.869 10.2996 139.221 9.8894C139.572 9.47925 140.088 9.27417 140.721 9.27417C141.189 9.27417 141.682 9.39136 142.15 9.60229L142.268 9.64917V6.88237L142.221 6.85894C141.775 6.70073 141.166 6.6187 140.416 6.6187C139.467 6.6187 138.6 6.82964 137.838 7.24448C137.076 7.64292 136.479 8.24058 136.068 8.99058C135.646 9.74058 135.436 10.6078 135.436 11.557V13.4554H133.162V16.0921H135.447V27.2015H138.717V16.0921H143.577V23.1468C143.577 26.0531 144.943 27.5296 147.655 27.5296C148.1 27.5296 148.569 27.4734 149.038 27.3773C149.524 27.2718 149.858 27.1664 150.045 27.0609L150.092 27.0374V24.3773L149.96 24.4664C149.784 24.5835 149.561 24.6855 149.304 24.7558C149.046 24.8261 148.823 24.873 148.657 24.873C148.024 24.873 147.555 24.7089 147.267 24.3726C146.969 24.0386 146.821 23.4468 146.821 22.6148V16.1226H150.079L150.072 16.1062L150.059 16.1144ZM125.813 24.88C124.626 24.88 123.689 24.4851 123.024 23.7082C122.364 22.9289 122.028 21.8167 122.028 20.4035C122.028 18.9457 122.364 17.8019 123.028 17.0097C123.689 16.2222 124.617 15.8214 125.789 15.8214C126.925 15.8214 127.816 16.2035 128.472 16.9582C129.129 17.7175 129.457 18.8496 129.457 20.3238C129.457 21.8167 129.152 22.964 128.543 23.7304C127.933 24.4921 127.019 24.8789 125.824 24.8789L125.813 24.88ZM125.964 13.1449C123.703 13.1449 121.9 13.8082 120.616 15.1183C119.339 16.4308 118.685 18.2425 118.685 20.5089C118.685 22.6652 119.318 24.3937 120.575 25.6535C121.829 26.9191 123.536 27.5753 125.646 27.5753C127.839 27.5753 129.607 26.8957 130.886 25.5773C132.175 24.2507 132.815 22.4531 132.815 20.2417C132.815 18.055 132.206 16.3089 130.999 15.0621C129.792 13.8035 128.1 13.1683 125.96 13.1683L125.964 13.1449ZM113.397 13.1683C111.85 13.1683 110.58 13.5621 109.6 14.3402C108.625 15.123 108.124 16.1449 108.124 17.3871C108.124 18.0363 108.234 18.6058 108.447 19.098C108.658 19.5832 108.986 20.0121 109.425 20.373C109.858 20.7246 110.526 21.0996 111.417 21.4839C112.167 21.7886 112.718 22.0464 113.074 22.2574C113.425 22.4531 113.674 22.6558 113.8 22.8515C113.941 23.039 114.011 23.3085 114.011 23.625C114.011 24.5554 113.322 25.0031 111.902 25.0031C111.372 25.0031 110.77 24.8929 110.111 24.675C109.447 24.4593 108.83 24.1476 108.275 23.7468L108.134 23.6531V26.7937L108.181 26.8171C108.65 27.0281 109.228 27.2156 109.916 27.3562C110.601 27.5085 111.228 27.5789 111.767 27.5789C113.443 27.5789 114.791 27.1804 115.775 26.4023C116.759 25.6148 117.263 24.5625 117.263 23.2804C117.263 22.3546 116.994 21.5578 116.461 20.9191C115.933 20.2792 115.019 19.6957 113.738 19.18C112.727 18.7699 112.074 18.43 111.793 18.1722C111.535 17.9191 111.414 17.5628 111.414 17.1128C111.414 16.7144 111.579 16.3933 111.912 16.1355C112.248 15.8718 112.716 15.7406 113.302 15.7406C113.847 15.7406 114.404 15.8226 114.966 15.9925C115.517 16.166 116.004 16.391 116.408 16.6675L116.545 16.7613V13.7613L116.498 13.7378C116.117 13.5738 115.623 13.4367 115.021 13.3277C114.424 13.214 113.881 13.1636 113.41 13.1636L113.397 13.1683ZM99.582 24.8941C98.3984 24.8941 97.4609 24.5027 96.8047 23.7222C96.1367 22.9488 95.8027 21.8355 95.8027 20.4175C95.8027 18.9644 96.1379 17.816 96.8035 17.0273C97.4598 16.2398 98.3902 15.839 99.5574 15.839C100.694 15.839 101.596 16.221 102.247 16.9757C102.894 17.7375 103.231 18.8695 103.231 20.3437C103.231 21.8343 102.915 22.9804 102.305 23.748C101.708 24.5097 100.794 24.8964 99.5867 24.8964L99.582 24.8941ZM99.7508 13.166C97.4773 13.166 95.6727 13.8269 94.3953 15.1371C93.1098 16.4496 92.4617 18.2601 92.4617 20.5277C92.4617 22.6839 93.0945 24.4113 94.3402 25.6722C95.5965 26.9378 97.3004 27.5941 99.4086 27.5941C101.612 27.5941 103.37 26.9144 104.659 25.5902C105.941 24.2613 106.592 22.4636 106.592 20.2523C106.592 18.0644 105.983 16.3183 104.787 15.0726C103.58 13.8128 101.886 13.1777 99.7484 13.1777L99.7508 13.166ZM87.5164 15.8824V13.4917H84.282V27.2378H87.5164V20.2066C87.5164 19.0113 87.7859 18.0269 88.3215 17.2828C88.8488 16.5421 89.552 16.1812 90.4074 16.1812C90.7004 16.1812 91.0285 16.2281 91.3895 16.3218C91.741 16.4156 91.9941 16.5093 92.1395 16.6265L92.2801 16.7203V13.4625L92.2285 13.439C91.9238 13.3031 91.502 13.2375 90.9629 13.2375C90.1543 13.2375 89.4277 13.5 88.8043 14.0109C88.2535 14.4656 87.8586 15.0843 87.5562 15.8578H87.4977L87.527 15.8812L87.5164 15.8824ZM78.4695 13.1636C76.9812 13.1636 75.657 13.4742 74.532 14.1011C73.3977 14.7339 72.5281 15.6246 71.9305 16.773C71.3445 17.9097 71.0398 19.2398 71.0398 20.7222C71.0398 22.023 71.3352 23.2113 71.907 24.2636C72.4859 25.3183 73.3016 26.1386 74.3328 26.7128C75.357 27.2789 76.5477 27.5683 77.8648 27.5683C79.4023 27.5683 80.7125 27.2636 81.7672 26.6542L81.8141 26.6308V23.6636L81.6734 23.7609C81.1965 24.1124 80.6656 24.3878 80.0914 24.5871C79.5195 24.7863 78.9992 24.8871 78.5445 24.8871C77.2719 24.8871 76.2547 24.4886 75.5141 23.7093C74.7641 22.9124 74.3891 21.8109 74.3891 20.4281C74.3891 19.0218 74.7875 17.8968 75.5562 17.0765C76.3297 16.2328 77.3469 15.8109 78.5914 15.8109C79.6461 15.8109 80.6855 16.1742 81.6652 16.8773L81.8059 16.971V13.8539L81.7672 13.8304C81.398 13.6195 80.8965 13.4554 80.2672 13.3218C79.6508 13.1929 79.0437 13.1296 78.4648 13.1296L78.4695 13.1636ZM68.8203 13.4578H65.5906V27.2156H68.825V13.4578H68.8203ZM67.2266 7.61011C66.6945 7.61011 66.2305 7.79058 65.8484 8.14917C65.4664 8.51011 65.2719 8.96245 65.2719 9.49683C65.2719 10.0242 65.4676 10.4695 65.8461 10.821C66.2211 11.1726 66.6898 11.346 67.2289 11.346C67.768 11.346 68.2367 11.1703 68.6176 10.8187C69.002 10.4671 69.1965 10.0218 69.1965 9.49448C69.1965 8.97886 69.009 8.53355 68.634 8.15855C68.259 7.80698 67.7902 7.61948 67.2277 7.61948L67.2266 7.61011ZM59.1535 12.4593V27.2249H62.4582V8.05425H57.8879L52.0953 22.3019L46.4586 8.0519H41.7078V27.2378H44.8133V12.4781H44.9188L50.8719 27.2414H53.2098L59.0691 12.4792H59.1805L59.1629 12.4722L59.1535 12.4593ZM16.884 18.4242H32.0949V33.648H16.8605L16.8816 18.4347L16.884 18.4242ZM0.0828125 18.4335H15.2914V33.648H0.078125L0.0828125 18.4347V18.4335ZM16.8852 1.63237H32.0961V16.8433H16.8758L16.8852 1.62769V1.63237ZM0.0828125 1.63003H15.2914V16.8433H0.078125L0.0828125 1.62769V1.63003Z'
				fill='currentColor'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3753_27919'>
				<rect
					width='150'
					height='32.8125'
					fill='white'
					transform='translate(0.0820312 0.835449)'
				/>
			</clipPath>
		</defs>
	</svg>
);
const spotifySvg = (
	<svg
		className='h-8 hover:text-gray-900 dark:hover:text-white'
		viewBox='0 0 151 34'
		fill='currentColor'
		xmlns='http://www.w3.org/2000/svg'>
		<g clipPath='url(#clip0_3753_27919)'>
			<path
				d='M150.059 16.1144V13.4753H146.783V9.37378L146.673 9.40894L143.596 10.3464H143.538V13.4519H138.682V11.7175C138.682 10.9207 138.869 10.2996 139.221 9.8894C139.572 9.47925 140.088 9.27417 140.721 9.27417C141.189 9.27417 141.682 9.39136 142.15 9.60229L142.268 9.64917V6.88237L142.221 6.85894C141.775 6.70073 141.166 6.6187 140.416 6.6187C139.467 6.6187 138.6 6.82964 137.838 7.24448C137.076 7.64292 136.479 8.24058 136.068 8.99058C135.646 9.74058 135.436 10.6078 135.436 11.557V13.4554H133.162V16.0921H135.447V27.2015H138.717V16.0921H143.577V23.1468C143.577 26.0531 144.943 27.5296 147.655 27.5296C148.1 27.5296 148.569 27.4734 149.038 27.3773C149.524 27.2718 149.858 27.1664 150.045 27.0609L150.092 27.0374V24.3773L149.96 24.4664C149.784 24.5835 149.561 24.6855 149.304 24.7558C149.046 24.8261 148.823 24.873 148.657 24.873C148.024 24.873 147.555 24.7089 147.267 24.3726C146.969 24.0386 146.821 23.4468 146.821 22.6148V16.1226H150.079L150.072 16.1062L150.059 16.1144ZM125.813 24.88C124.626 24.88 123.689 24.4851 123.024 23.7082C122.364 22.9289 122.028 21.8167 122.028 20.4035C122.028 18.9457 122.364 17.8019 123.028 17.0097C123.689 16.2222 124.617 15.8214 125.789 15.8214C126.925 15.8214 127.816 16.2035 128.472 16.9582C129.129 17.7175 129.457 18.8496 129.457 20.3238C129.457 21.8167 129.152 22.964 128.543 23.7304C127.933 24.4921 127.019 24.8789 125.824 24.8789L125.813 24.88ZM125.964 13.1449C123.703 13.1449 121.9 13.8082 120.616 15.1183C119.339 16.4308 118.685 18.2425 118.685 20.5089C118.685 22.6652 119.318 24.3937 120.575 25.6535C121.829 26.9191 123.536 27.5753 125.646 27.5753C127.839 27.5753 129.607 26.8957 130.886 25.5773C132.175 24.2507 132.815 22.4531 132.815 20.2417C132.815 18.055 132.206 16.3089 130.999 15.0621C129.792 13.8035 128.1 13.1683 125.96 13.1683L125.964 13.1449ZM113.397 13.1683C111.85 13.1683 110.58 13.5621 109.6 14.3402C108.625 15.123 108.124 16.1449 108.124 17.3871C108.124 18.0363 108.234 18.6058 108.447 19.098C108.658 19.5832 108.986 20.0121 109.425 20.373C109.858 20.7246 110.526 21.0996 111.417 21.4839C112.167 21.7886 112.718 22.0464 113.074 22.2574C113.425 22.4531 113.674 22.6558 113.8 22.8515C113.941 23.039 114.011 23.3085 114.011 23.625C114.011 24.5554 113.322 25.0031 111.902 25.0031C111.372 25.0031 110.77 24.8929 110.111 24.675C109.447 24.4593 108.83 24.1476 108.275 23.7468L108.134 23.6531V26.7937L108.181 26.8171C108.65 27.0281 109.228 27.2156 109.916 27.3562C110.601 27.5085 111.228 27.5789 111.767 27.5789C113.443 27.5789 114.791 27.1804 115.775 26.4023C116.759 25.6148 117.263 24.5625 117.263 23.2804C117.263 22.3546 116.994 21.5578 116.461 20.9191C115.933 20.2792 115.019 19.6957 113.738 19.18C112.727 18.7699 112.074 18.43 111.793 18.1722C111.535 17.9191 111.414 17.5628 111.414 17.1128C111.414 16.7144 111.579 16.3933 111.912 16.1355C112.248 15.8718 112.716 15.7406 113.302 15.7406C113.847 15.7406 114.404 15.8226 114.966 15.9925C115.517 16.166 116.004 16.391 116.408 16.6675L116.545 16.7613V13.7613L116.498 13.7378C116.117 13.5738 115.623 13.4367 115.021 13.3277C114.424 13.214 113.881 13.1636 113.41 13.1636L113.397 13.1683ZM99.582 24.8941C98.3984 24.8941 97.4609 24.5027 96.8047 23.7222C96.1367 22.9488 95.8027 21.8355 95.8027 20.4175C95.8027 18.9644 96.1379 17.816 96.8035 17.0273C97.4598 16.2398 98.3902 15.839 99.5574 15.839C100.694 15.839 101.596 16.221 102.247 16.9757C102.894 17.7375 103.231 18.8695 103.231 20.3437C103.231 21.8343 102.915 22.9804 102.305 23.748C101.708 24.5097 100.794 24.8964 99.5867 24.8964L99.582 24.8941ZM99.7508 13.166C97.4773 13.166 95.6727 13.8269 94.3953 15.1371C93.1098 16.4496 92.4617 18.2601 92.4617 20.5277C92.4617 22.6839 93.0945 24.4113 94.3402 25.6722C95.5965 26.9378 97.3004 27.5941 99.4086 27.5941C101.612 27.5941 103.37 26.9144 104.659 25.5902C105.941 24.2613 106.592 22.4636 106.592 20.2523C106.592 18.0644 105.983 16.3183 104.787 15.0726C103.58 13.8128 101.886 13.1777 99.7484 13.1777L99.7508 13.166ZM87.5164 15.8824V13.4917H84.282V27.2378H87.5164V20.2066C87.5164 19.0113 87.7859 18.0269 88.3215 17.2828C88.8488 16.5421 89.552 16.1812 90.4074 16.1812C90.7004 16.1812 91.0285 16.2281 91.3895 16.3218C91.741 16.4156 91.9941 16.5093 92.1395 16.6265L92.2801 16.7203V13.4625L92.2285 13.439C91.9238 13.3031 91.502 13.2375 90.9629 13.2375C90.1543 13.2375 89.4277 13.5 88.8043 14.0109C88.2535 14.4656 87.8586 15.0843 87.5562 15.8578H87.4977L87.527 15.8812L87.5164 15.8824ZM78.4695 13.1636C76.9812 13.1636 75.657 13.4742 74.532 14.1011C73.3977 14.7339 72.5281 15.6246 71.9305 16.773C71.3445 17.9097 71.0398 19.2398 71.0398 20.7222C71.0398 22.023 71.3352 23.2113 71.907 24.2636C72.4859 25.3183 73.3016 26.1386 74.3328 26.7128C75.357 27.2789 76.5477 27.5683 77.8648 27.5683C79.4023 27.5683 80.7125 27.2636 81.7672 26.6542L81.8141 26.6308V23.6636L81.6734 23.7609C81.1965 24.1124 80.6656 24.3878 80.0914 24.5871C79.5195 24.7863 78.9992 24.8871 78.5445 24.8871C77.2719 24.8871 76.2547 24.4886 75.5141 23.7093C74.7641 22.9124 74.3891 21.8109 74.3891 20.4281C74.3891 19.0218 74.7875 17.8968 75.5562 17.0765C76.3297 16.2328 77.3469 15.8109 78.5914 15.8109C79.6461 15.8109 80.6855 16.1742 81.6652 16.8773L81.8059 16.971V13.8539L81.7672 13.8304C81.398 13.6195 80.8965 13.4554 80.2672 13.3218C79.6508 13.1929 79.0437 13.1296 78.4648 13.1296L78.4695 13.1636ZM68.8203 13.4578H65.5906V27.2156H68.825V13.4578H68.8203ZM67.2266 7.61011C66.6945 7.61011 66.2305 7.79058 65.8484 8.14917C65.4664 8.51011 65.2719 8.96245 65.2719 9.49683C65.2719 10.0242 65.4676 10.4695 65.8461 10.821C66.2211 11.1726 66.6898 11.346 67.2289 11.346C67.768 11.346 68.2367 11.1703 68.6176 10.8187C69.002 10.4671 69.1965 10.0218 69.1965 9.49448C69.1965 8.97886 69.009 8.53355 68.634 8.15855C68.259 7.80698 67.7902 7.61948 67.2277 7.61948L67.2266 7.61011ZM59.1535 12.4593V27.2249H62.4582V8.05425H57.8879L52.0953 22.3019L46.4586 8.0519H41.7078V27.2378H44.8133V12.4781H44.9188L50.8719 27.2414H53.2098L59.0691 12.4792H59.1805L59.1629 12.4722L59.1535 12.4593ZM16.884 18.4242H32.0949V33.648H16.8605L16.8816 18.4347L16.884 18.4242ZM0.0828125 18.4335H15.2914V33.648H0.078125L0.0828125 18.4347V18.4335ZM16.8852 1.63237H32.0961V16.8433H16.8758L16.8852 1.62769V1.63237ZM0.0828125 1.63003H15.2914V16.8433H0.078125L0.0828125 1.62769V1.63003Z'
				fill='currentColor'
			/>
		</g>
		<defs>
			<clipPath id='clip0_3753_27919'>
				<rect
					width='150'
					height='32.8125'
					fill='white'
					transform='translate(0.0820312 0.835449)'
				/>
			</clipPath>
		</defs>
	</svg>
);
const checkedSvg = (
	<svg
		className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400'
		fill='currentColor'
		viewBox='0 0 20 20'
		xmlns='http://www.w3.org/2000/svg'>
		<path
			fillRule='evenodd'
			d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
			clipRule='evenodd'></path>
	</svg>
);
const MainSection = () => {
	return (
		<div>
			<section className='bg-white dark:bg-gray-900'>
				<div className='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16'>
					<div className='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400'>
						<a
							href='#'
							className='flex items-center lg:justify-center'>
							{airbnSvg}
						</a>
						<a
							href='#'
							className='flex items-center lg:justify-center'>
							{googleSvg}
						</a>
						<a
							href='#'
							className='flex items-center lg:justify-center'>
							{microsoftSvg}
						</a>

						<a
							href='#'
							className='flex items-center lg:justify-center'>
							{spotifySvg}
						</a>
						<a
							href='#'
							className='flex items-center lg:justify-center'>
							{googleSvg}
						</a>
						<a
							href='#'
							className='flex items-center lg:justify-center'>
							{googleSvg}
						</a>
					</div>
				</div>
			</section>

			<section className='bg-gray-50 dark:bg-gray-800'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
					<div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
						<div className='text-gray-500 sm:text-lg dark:text-gray-400'>
							<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
								Work with tools you already use
							</h2>
							<p className='mb-8 font-light lg:text-xl'>
								Deliver great service experiences fast - without
								the complexity of traditional ITSM solutions.
								Accelerate critical development work, eliminate
								toil, and deploy changes with ease.
							</p>
							<ul
								role='list'
								className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Continuous integration and deployment
									</span>
								</li>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Development workflow
									</span>
								</li>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Knowledge management
									</span>
								</li>
							</ul>
							<p className='mb-8 font-light lg:text-xl'>
								Deliver great service experiences fast - without
								the complexity of traditional ITSM solutions.
							</p>
						</div>
						<Image
							className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
							src={feature1}
							alt='dashboard feature image'
						/>
					</div>
					<div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
						<Image
							className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
							src={feature1}
							alt='feature image 2'
						/>
						<div className='text-gray-500 sm:text-lg dark:text-gray-400'>
							<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
								We invest in the world’s potential
							</h2>
							<p className='mb-8 font-light lg:text-xl'>
								Deliver great service experiences fast - without
								the complexity of traditional ITSM solutions.
								Accelerate critical development work, eliminate
								toil, and deploy changes with ease.
							</p>
							<ul
								role='list'
								className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Dynamic reports and dashboards
									</span>
								</li>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Templates for everyone
									</span>
								</li>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Development workflow
									</span>
								</li>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Limitless business automation
									</span>
								</li>
								<li className='flex space-x-3'>
									{checkedSvg}
									<span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
										Knowledge management
									</span>
								</li>
							</ul>
							<p className='font-light lg:text-xl'>
								Deliver great service experiences fast - without
								the complexity of traditional ITSM solutions.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-white dark:bg-gray-900'>
				<div className='items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
					<div className='col-span-2 mb-8'>
						<p className='text-lg font-medium text-purple-600 dark:text-purple-500'>
							Trusted Worldwide
						</p>
						<h2 className='mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white'>
							Trusted by over 600 million users and 10,000 teams
						</h2>
						<p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
							Our rigorous security and compliance standards are
							at the heart of all we do. We work tirelessly to
							protect you and your customers.
						</p>
						<div className='pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700'>
							<div>
								<a
									href='#'
									className='inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700'>
									Explore Legality Guide
									<svg
										className='w-5 h-5 ml-1'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</a>
							</div>
							<div>
								<a
									href='#'
									className='inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700'>
									Visit the Trust Center
									<svg
										className='w-5 h-5 ml-1'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className='col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0'>
						<div>
							<svg
								className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z'
									clipRule='evenodd'></path>
							</svg>
							<h3 className='mb-2 text-2xl font-bold dark:text-white'>
								99.99% uptime
							</h3>
							<p className='font-light text-gray-500 dark:text-gray-400'>
								For Landwind, with zero maintenance downtime
							</p>
						</div>
						<div>
							<svg
								className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
							</svg>
							<h3 className='mb-2 text-2xl font-bold dark:text-white'>
								600M+ Users
							</h3>
							<p className='font-light text-gray-500 dark:text-gray-400'>
								Trusted by over 600 milion users around the
								world
							</p>
						</div>
						<div>
							<svg
								className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
									clipRule='evenodd'></path>
							</svg>
							<h3 className='mb-2 text-2xl font-bold dark:text-white'>
								100+ countries
							</h3>
							<p className='font-light text-gray-500 dark:text-gray-400'>
								Have used Landwind to create functional websites
							</p>
						</div>
						<div>
							<svg
								className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
							</svg>
							<h3 className='mb-2 text-2xl font-bold dark:text-white'>
								5+ Million
							</h3>
							<p className='font-light text-gray-500 dark:text-gray-400'>
								Transactions per day
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-50 dark:bg-gray-800'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6'>
					<figure className='max-w-screen-md mx-auto'>
						<svg
							className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
							viewBox='0 0 24 27'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
								fill='currentColor'
							/>
						</svg>
						<blockquote>
							<p className='text-xl font-medium text-gray-900 md:text-2xl dark:text-white'>
								`&quot`Landwind is just awesome. It contains
								tons of predesigned components and pages
								starting from login screen to complex dashboard.
								Perfect choice for your next SaaS
								application.`&quot`
							</p>
						</blockquote>
						<figcaption className='flex items-center justify-center mt-6 space-x-3'>
							<Image
								className='w-6 h-6 rounded-full'
								src={michaelPng}
								alt='profile picture'
							/>
							<div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
								<div className='pr-3 font-medium text-gray-900 dark:text-white'>
									Micheal Gough
								</div>
								<div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
									CEO at Google
								</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</section>

			<section className='bg-white dark:bg-gray-900'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6'>
					<div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
						<h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
							Designed for business teams like yours
						</h2>
						<p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
							Here at Landwind we focus on markets where
							technology, innovation, and capital can unlock
							long-term value and drive economic growth.
						</p>
					</div>
					<div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
						<div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
							<h3 className='mb-4 text-2xl font-semibold'>
								Starter
							</h3>
							<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
								Best option for personal use & for your next
								project.
							</p>
							<div className='flex items-baseline justify-center my-8'>
								<span className='mr-2 text-5xl font-extrabold'>
									$29
								</span>
								<span className='text-gray-500 dark:text-gray-400'>
									/month
								</span>
							</div>
							<ul
								role='list'
								className='mb-8 space-y-4 text-left'>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>Individual configuration</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>No setup, or hidden fees</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Team size:
										<span className='font-semibold'>
											1 developer
										</span>
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Premium support:
										<span className='font-semibold'>
											6 months
										</span>
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Free updates:
										<span className='font-semibold'>
											6 months
										</span>
									</span>
								</li>
							</ul>
							<a
								href='#'
								className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'>
								Get started
							</a>
						</div>
						<div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
							<h3 className='mb-4 text-2xl font-semibold'>
								Company
							</h3>
							<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
								Relevant for multiple users, extended & premium
								support.
							</p>
							<div className='flex items-baseline justify-center my-8'>
								<span className='mr-2 text-5xl font-extrabold'>
									$99
								</span>
							</div>
							<ul
								role='list'
								className='mb-8 space-y-4 text-left'>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>Individual configuration</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>No setup, or hidden fees</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Team size:
										<span className='font-semibold'>
											10 developers
										</span>
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Premium support:
										<span className='font-semibold'>
											24 months
										</span>
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Free updates:
										<span className='font-semibold'>
											24 months
										</span>
									</span>
								</li>
							</ul>
							<a
								href='#'
								className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'>
								Get started
							</a>
						</div>

						<div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
							<h3 className='mb-4 text-2xl font-semibold'>
								Enterprise
							</h3>
							<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
								Best for large scale uses and extended
								redistribution rights.
							</p>
							<div className='flex items-baseline justify-center my-8'>
								<span className='mr-2 text-5xl font-extrabold'>
									$499
								</span>
								<span className='text-gray-500 dark:text-gray-400'>
									/month
								</span>
							</div>
							<ul
								role='list'
								className='mb-8 space-y-4 text-left'>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>Individual configuration</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>No setup, or hidden fees</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Team size:
										<span className='font-semibold'>
											100+ developers
										</span>
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Premium support:
										<span className='font-semibold'>
											36 months
										</span>
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<svg
										className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
									<span>
										Free updates:
										<span className='font-semibold'>
											36 months
										</span>
									</span>
								</li>
							</ul>
							<a
								href='#'
								className='text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900'>
								Get started
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-white dark:bg-gray-900'>
				<div className='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 '>
					<h2 className='mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white'>
						Frequently asked questions
					</h2>
					<div className='max-w-screen-md mx-auto'>
						<div
							id='accordion-flush'
							data-accordion='collapse'
							data-active-classNamees='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
							data-inactive-classNamees='text-gray-500 dark:text-gray-400'>
							<h3 id='accordion-flush-heading-1'>
								<button
									type='button'
									className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
									data-accordion-target='#accordion-flush-body-1'
									aria-expanded='true'
									aria-controls='accordion-flush-body-1'>
									<span>
										Can I use Landwind in open-source
										projects?
									</span>
									<svg
										data-accordion-icon=''
										className='w-6 h-6 rotate-180 shrink-0'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</button>
							</h3>
							<div
								id='accordion-flush-body-1'
								className=''
								aria-labelledby='accordion-flush-heading-1'>
								<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										Landwind is an open-source library of
										interactive components built on top of
										Tailwind CSS including buttons,
										dropdowns, modals, navbars, and more.
									</p>
									<p className='text-gray-500 dark:text-gray-400'>
										Check out this guide to learn how to
										<a
											href='#'
											className='text-purple-600 dark:text-purple-500 hover:underline'>
											get started
										</a>
										and start developing websites even
										faster with components on top of
										Tailwind CSS.
									</p>
								</div>
							</div>
							<h3 id='accordion-flush-heading-2'>
								<button
									type='button'
									className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
									data-accordion-target='#accordion-flush-body-2'
									aria-expanded='false'
									aria-controls='accordion-flush-body-2'>
									<span>
										Is there a Figma file available?
									</span>
									<svg
										data-accordion-icon=''
										className='w-6 h-6 shrink-0'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</button>
							</h3>
							<div
								id='accordion-flush-body-2'
								className='hidden'
								aria-labelledby='accordion-flush-heading-2'>
								<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										Landwind is first conceptualized and
										designed using the Figma software so
										everything you see in the library has a
										design equivalent in our Figma file.
									</p>
									<p className='text-gray-500 dark:text-gray-400'>
										Check out the
										<a
											href='#'
											className='text-purple-600 dark:text-purple-500 hover:underline'>
											Figma design system
										</a>
										based on the utility classNamees from
										Tailwind CSS and components from
										Landwind.
									</p>
								</div>
							</div>
							<h3 id='accordion-flush-heading-3'>
								<button
									type='button'
									className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
									data-accordion-target='#accordion-flush-body-3'
									aria-expanded='false'
									aria-controls='accordion-flush-body-3'>
									<span>
										What are the differences between
										Landwind and Tailwind UI?
									</span>
									<svg
										data-accordion-icon=''
										className='w-6 h-6 shrink-0'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</button>
							</h3>
							<div
								id='accordion-flush-body-3'
								className='hidden'
								aria-labelledby='accordion-flush-heading-3'>
								<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										The main difference is that the core
										components from Landwind are open source
										under the MIT license, whereas Tailwind
										UI is a paid product. Another difference
										is that Landwind relies on smaller and
										standalone components, whereas Tailwind
										UI offers sections of pages.
									</p>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										However, we actually recommend using
										both Landwind, Landwind Pro, and even
										Tailwind UI as there is no technical
										reason stopping you from using the best
										of two worlds.
									</p>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										Learn more about these technologies:
									</p>
									<ul className='pl-5 text-gray-500 list-disc dark:text-gray-400'>
										<li>
											<a
												href='#'
												className='text-purple-600 dark:text-purple-500 hover:underline'>
												Landwind Pro
											</a>
										</li>
										<li>
											<a
												href='#'
												className='text-purple-600 dark:text-purple-500 hover:underline'>
												Tailwind UI
											</a>
										</li>
									</ul>
								</div>
							</div>
							<h3 id='accordion-flush-heading-4'>
								<button
									type='button'
									className='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
									data-accordion-target='#accordion-flush-body-4'
									aria-expanded='false'
									aria-controls='accordion-flush-body-4'>
									<span>What about browser support?</span>
									<svg
										data-accordion-icon=''
										className='w-6 h-6 shrink-0'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'></path>
									</svg>
								</button>
							</h3>
							<div
								id='accordion-flush-body-4'
								className='hidden'
								aria-labelledby='accordion-flush-heading-4'>
								<div className='py-5 border-b border-gray-200 dark:border-gray-700'>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										The main difference is that the core
										components from Landwind are open source
										under the MIT license, whereas Tailwind
										UI is a paid product. Another difference
										is that Landwind relies on smaller and
										standalone components, whereas Tailwind
										UI offers sections of pages.
									</p>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										However, we actually recommend using
										both Landwind, Landwind Pro, and even
										Tailwind UI as there is no technical
										reason stopping you from using the best
										of two worlds.
									</p>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										Learn more about these technologies:
									</p>
									<ul className='pl-5 text-gray-500 list-disc dark:text-gray-400'>
										<li>
											<a
												href='#'
												className='text-purple-600 dark:text-purple-500 hover:underline'>
												Landwind Pro
											</a>
										</li>
										<li>
											<a
												href='#'
												className='text-purple-600 dark:text-purple-500 hover:underline'>
												Tailwind UI
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='bg-gray-50 dark:bg-gray-800'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
					<div className='max-w-screen-sm mx-auto text-center'>
						<h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
							Start your free trial today
						</h2>
						<p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
							Try Landwind Platform for 30 days. No credit card
							required.
						</p>
						<a
							href='#'
							className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'>
							Free trial for 30 days
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default MainSection;
