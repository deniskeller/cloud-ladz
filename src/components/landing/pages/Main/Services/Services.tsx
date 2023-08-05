import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import s from './Services.module.scss';

const Services: React.FC = () => {
	return (
		<div className={s.Services}>
			<BaseContainer>
				<div className={s.Services_Title}>
					<h2>Services:</h2>
				</div>

				<div className={s.Services_Pictures}>
					{/* кусты */}
					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_1}`}
					/>

					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_2}`}
					/>

					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_3}`}
					/>

					<BaseIcon
						viewBox='0 0 126 94'
						icon={ALL_ICONS.BUSH}
						className={`${s.Bush} ${s.Bush_Desktop} ${s.Bush_4}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_1}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_2}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_3}`}
					/>

					<BaseIcon
						viewBox='0 0 90 63'
						icon={ALL_ICONS.BUSH_M}
						className={`${s.Bush} ${s.Bush_Mobile} ${s.Bush_4}`}
					/>

					{/* трава */}

					<div className={s.Services_Pictures_Grass}>
						<svg
							viewBox='0 0 1572 168'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`${s.Grass} ${s.Grass_Desktop}`}
							preserveAspectRatio='none'
						>
							<path d='M1289.19 0H922V77.884H1289.19V0Z' fill='#62AE4A' />
							<path
								d='M1289.24 13.3545H1261.46V29.3278H1205.74V40.2884H1124.8V68.2698H1088.84V29.3278H1042.09V43.2811H980.905V63.2571H922V77.9211H1289.24V13.3545Z'
								fill='#50903B'
							/>
							<path
								d='M1289.19 77.9219H922V167.814H1289.19V77.9219Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1289.24 147.164V104.219H1281.28V119.22H1236.29V102.237H1194.96V88.2461H1178.76V99.2441H1164.37V115.217H1133.77V99.2441H1094.25V119.22H1063.66V93.2214H1006.08V104.219H957.535V122.213H922V140.169H964.758V167.776H988.129V131.191H1022.28V149.147H1047.46V137.176H1103.23V153.149H1130.21V138.186H1182.37V156.142H1221.95V143.161H1256.1V147.164H1289.24Z'
								fill='#945835'
							/>
							<path
								d='M1201.71 116.34H1177.86V129.321H1201.71V116.34Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1255.2 126.515H1231.35V139.495H1255.2V126.515Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1154.06 129.357H1130.21V142.338H1154.06V129.357Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1071.31 130.293H1047.46V143.274H1071.31V130.293Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1029.35 103.359H1005.5V116.34H1029.35V103.359Z'
								fill='#7F4D2E'
							/>
							<path
								d='M966.99 121.839H943.141V134.82H966.99V121.839Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1198.57 65.9131H1169.79V78.8937H1198.57V65.9131Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1060.05 71.4121H1031.26V84.3928H1060.05V71.4121Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1169.78 72.4229H1141V85.4035H1169.78V72.4229Z'
								fill='#50903B'
							/>
							<path
								d='M1255.2 71.749H1226.41V84.7297H1255.2V71.749Z'
								fill='#50903B'
							/>
							<path
								d='M1109.55 75.1533H1080.76V88.134H1109.55V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M997.105 71.4121H968.316V84.3928H997.105V71.4121Z'
								fill='#50903B'
							/>
							<path d='M1572 0H1205V78H1572V0Z' fill='#62AE4A' />
							<path
								d='M1572 13H1544.24V29.0805H1488.56V40.1147H1407.66V68.2839H1371.73V29.0805H1325.02V43.1275H1263.87V63.2376H1205V78H1572V13Z'
								fill='#50903B'
							/>
							<path d='M1572 78H1205V168H1572V78Z' fill='#7F4D2E' />
							<path
								d='M1572 147.266V104.068H1564.04V119.157H1519.08V102.073H1477.78V88H1461.59V99.063H1447.21V115.131H1416.63V99.063H1377.14V119.157H1346.57V93.0047H1289.03V104.068H1240.51V122.167H1205V140.23H1247.73V168H1271.09V131.199H1305.22V149.261H1330.38V137.219H1386.11V153.287H1413.08V138.235H1465.2V156.297H1504.75V143.24H1538.88V147.266H1572Z'
								fill='#945835'
							/>
							<path
								d='M1484.71 116.34H1460.86V129.321H1484.71V116.34Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1538.2 126.515H1514.35V139.495H1538.2V126.515Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1437.06 129.357H1413.21V142.338H1437.06V129.357Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1354.31 130.293H1330.46V143.274H1354.31V130.293Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1312.35 103.359H1288.5V116.34H1312.35V103.359Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1249.99 121.839H1226.14V134.82H1249.99V121.839Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1481.57 65.9131H1452.79V78.8937H1481.57V65.9131Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1343.05 71.4121H1314.26V84.3928H1343.05V71.4121Z'
								fill='#7F4D2E'
							/>
							<path
								d='M1452.78 72.4229H1424V85.4035H1452.78V72.4229Z'
								fill='#50903B'
							/>
							<path
								d='M1538.2 71.749H1509.41V84.7297H1538.2V71.749Z'
								fill='#50903B'
							/>
							<path
								d='M1392.55 75.1533H1363.77V88.134H1392.55V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M1280.11 71.4121H1251.32V84.3928H1280.11V71.4121Z'
								fill='#50903B'
							/>
							<path d='M925.278 0H0V77.884H925.278V0Z' fill='#62AE4A' />
							<path
								d='M898.773 20.3124V32.3205H880.82V44.2911H839.443V54.2791H799.872V37.2958H781.865V32.3205H745.906V26.3351H713.558V41.2984H697.358V63.2571H679.352V41.2984H650.616V21.3224H630.804V49.3038H566.056V22.3325H506.725V42.3085H474.378V52.2965H433V39.3158H418.606V45.3012H377.229V13.3545H339.463V29.3278H283.692V40.2884H202.796V68.2698H166.837V29.3278H120.042V43.2811H58.9055V63.2571H0V77.9211H925.278V20.3124H898.773Z'
								fill='#50903B'
							/>
							<path
								d='M925.278 77.9219H0V167.814H925.278V77.9219Z'
								fill='#7F4D2E'
							/>
							<path
								d='M895.215 124.196H925.278V115.218H905.997V87.2365H855.643V103.21H799.872V77.9219H780.112V99.2446H754.936V107.213H722.535V99.2446H673.987V111.215H627.245V77.9219H618.215V97.2245H562.497V118.211H494.137V102.237H449.148V93.2219H434.806V124.196H384.453V104.22H359.276V119.221H314.286V102.237H272.909V88.2465H256.762V99.2446H242.368V115.218H211.773V99.2446H172.202V119.221H141.66V93.2219H84.0824V104.22H35.5345V122.213H0V140.169H42.7051V167.776H66.1292V131.191H100.283V149.147H125.46V137.177H181.178V153.15H208.161V138.187H260.321V156.143H299.892V143.162H334.099V147.165H384.453V137.177H472.572V131.191H582.256V153.15H598.456V141.179H686.576V167.776H720.729V124.196H756.688V145.182H783.671V130.181H846.614V160.145H889.797V147.165H895.215V124.196Z'
								fill='#945835'
							/>
							<path
								d='M891.178 94.8671H900.048V94.6426C897.127 94.7174 894.152 94.7922 891.178 94.8671Z'
								fill='#A37458'
							/>
							<path
								d='M837.636 65.9131H808.848V78.8937H837.636V65.9131Z'
								fill='#7F4D2E'
							/>
							<path
								d='M551.715 65.9131H522.926V78.8937H551.715V65.9131Z'
								fill='#7F4D2E'
							/>
							<path
								d='M400.652 65.9131H371.863V78.8937H400.652V65.9131Z'
								fill='#7F4D2E'
							/>
							<path
								d='M279.708 116.34H255.859V129.321H279.708V116.34Z'
								fill='#7F4D2E'
							/>
							<path
								d='M333.197 126.515H309.348V139.495H333.197V126.515Z'
								fill='#7F4D2E'
							/>
							<path
								d='M478.574 108.521H454.725V121.502H478.574V108.521Z'
								fill='#7F4D2E'
							/>
							<path
								d='M455.044 127.675H431.195V140.655H455.044V127.675Z'
								fill='#7F4D2E'
							/>
							<path
								d='M544.066 112.711H520.217V125.692H544.066V112.711Z'
								fill='#7F4D2E'
							/>
							<path
								d='M615.984 116.34H592.135V129.321H615.984V116.34Z'
								fill='#7F4D2E'
							/>
							<path
								d='M656.458 122.849H632.609V135.829H656.458V122.849Z'
								fill='#7F4D2E'
							/>
							<path
								d='M712.656 106.202H688.807V119.183H712.656V106.202Z'
								fill='#7F4D2E'
							/>
							<path
								d='M774.482 110.691H750.633V123.672H774.482V110.691Z'
								fill='#7F4D2E'
							/>
							<path
								d='M870.41 106.202H846.561V119.183H870.41V106.202Z'
								fill='#7F4D2E'
							/>
							<path
								d='M888.681 129.357H864.832V142.338H888.681V129.357Z'
								fill='#7F4D2E'
							/>
							<path
								d='M832.697 122.849H808.848V135.829H832.697V122.849Z'
								fill='#7F4D2E'
							/>
							<path
								d='M729.546 143.984H705.697V156.965H729.546V143.984Z'
								fill='#7F4D2E'
							/>
							<path
								d='M232.009 129.357H208.16V142.338H232.009V129.357Z'
								fill='#7F4D2E'
							/>
							<path
								d='M149.308 130.293H125.459V143.274H149.308V130.293Z'
								fill='#7F4D2E'
							/>
							<path
								d='M107.347 103.359H83.498V116.34H107.347V103.359Z'
								fill='#7F4D2E'
							/>
							<path
								d='M44.9896 121.839H21.1406V134.82H44.9896V121.839Z'
								fill='#7F4D2E'
							/>
							<path
								d='M276.521 65.9131H247.732V78.8937H276.521V65.9131Z'
								fill='#7F4D2E'
							/>
							<path
								d='M638.027 71.749H609.238V84.7297H638.027V71.749Z'
								fill='#7F4D2E'
							/>
							<path
								d='M732.043 71.4121H703.254V84.3928H732.043V71.4121Z'
								fill='#7F4D2E'
							/>
							<path
								d='M138.049 71.4121H109.26V84.3928H138.049V71.4121Z'
								fill='#7F4D2E'
							/>
							<path
								d='M247.785 72.4229H218.996V85.4035H247.785V72.4229Z'
								fill='#50903B'
							/>
							<path
								d='M333.195 71.749H304.406V84.7297H333.195V71.749Z'
								fill='#50903B'
							/>
							<path
								d='M445.59 75.1533H416.801V88.134H445.59V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M504.015 71.749H475.227V84.7297H504.015V71.749Z'
								fill='#50903B'
							/>
							<path
								d='M609.238 75.1533H580.449V88.134H609.238V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M688.806 75.1533H660.018V88.134H688.806V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M776.978 75.1533H748.189V88.134H776.978V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M883.05 67.4092H854.262V80.3898H883.05V67.4092Z'
								fill='#50903B'
							/>
							<path
								d='M187.5 75.1533H158.711V88.134H187.5V75.1533Z'
								fill='#50903B'
							/>
							<path
								d='M75.1052 71.4121H46.3164V84.3928H75.1052V71.4121Z'
								fill='#50903B'
							/>
						</svg>

						<svg
							viewBox='0 0 924 168'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`${s.Grass} ${s.Grass_Laptop}`}
							preserveAspectRatio='none'
						>
							<path d='M923.968 0H706.385V77.8834H923.968V0Z' fill='#62AE4A' />
							<path
								d='M924 13.3545H907.539V29.3277H874.522V40.2882H826.555V68.2693H805.247V29.3277H777.549V43.2808H741.291V63.2567H706.385V77.9206H924V13.3545Z'
								fill='#50903B'
							/>
							<path d='M924 78H706V168H924V78Z' fill='#7F4D2E' />
							<path
								d='M924 147.163V104.218H919.279V119.219H892.62V102.236H868.133V88.2451H858.533V99.2431H850.003V115.216H831.874V99.2431H808.457V119.219H790.328V93.2204H756.21V104.218H727.442V122.212H706.385V140.167H731.722V167.774H745.571V131.189H765.809V149.145H780.728V137.175H813.776V153.148H829.765V138.185H860.673V156.141H884.122V143.16H904.36V147.163H924Z'
								fill='#945835'
							/>
							<path
								d='M872.13 116.339H857.998V129.319H872.13V116.339Z'
								fill='#7F4D2E'
							/>
							<path
								d='M903.825 126.514H889.693V139.494H903.825V126.514Z'
								fill='#7F4D2E'
							/>
							<path
								d='M843.898 129.356H829.766V142.337H843.898V129.356Z'
								fill='#7F4D2E'
							/>
							<path
								d='M794.859 130.292H780.727V143.273H794.859V130.292Z'
								fill='#7F4D2E'
							/>
							<path
								d='M769.996 103.358H755.864V116.339H769.996V103.358Z'
								fill='#7F4D2E'
							/>
							<path
								d='M733.044 121.838H718.912V134.818H733.044V121.838Z'
								fill='#7F4D2E'
							/>
							<path
								d='M870.273 65.9126H853.214V78.8931H870.273V65.9126Z'
								fill='#7F4D2E'
							/>
							<path
								d='M788.187 71.4111H771.128V84.3917H788.187V71.4111Z'
								fill='#7F4D2E'
							/>
							<path
								d='M853.213 72.4219H836.154V85.4024H853.213V72.4219Z'
								fill='#50903B'
							/>
							<path
								d='M903.824 71.7485H886.765V84.7291H903.824V71.7485Z'
								fill='#50903B'
							/>
							<path
								d='M817.522 75.1523H800.463V88.1329H817.522V75.1523Z'
								fill='#50903B'
							/>
							<path
								d='M750.89 71.4111H733.831V84.3917H750.89V71.4111Z'
								fill='#50903B'
							/>
							<path
								d='M706.386 0.187012H0V78.0704H706.386V0.187012Z'
								fill='#62AE4A'
							/>
							<path
								d='M686.151 20.4999V32.5078H672.445V44.4783H640.856V54.4663H610.646V37.4831H596.9V32.5078H569.447V26.5225H544.752V41.4857H532.384V63.4442H518.638V41.4857H496.7V21.5099H481.575V49.491H432.144V22.5199H386.849V42.4957H362.154V52.4836H330.566V39.5031H319.577V45.4884H287.988V13.542H259.157V29.5152H216.579V40.4757H154.821V68.4568H127.368V29.5152H91.6436V43.4683H44.9702V63.4442H0V78.1081H706.386V20.4999H686.151Z'
								fill='#50903B'
							/>
							<path
								d='M706.386 78.1089H0V168H706.386V78.1089Z'
								fill='#7F4D2E'
							/>
							<path
								d='M683.434 124.382H706.386V115.405H691.666V87.4235H653.224V103.397H610.646V78.1089H595.562V99.4314H576.341V107.399H551.605V99.4314H514.542V111.402H478.858V78.1089H471.965V97.4114H429.427V118.397H377.239V102.424H342.893V93.4087H331.944V124.382H293.503V104.407H274.282V119.407H239.936V102.424H208.347V88.4335H196.02V99.4314H185.031V115.405H161.674V99.4314H131.464V119.407H108.148V93.4087H64.1911V104.407H27.1281V122.4H0V140.356H32.6024V167.963H50.4851V131.378H76.5589V149.334H95.7797V137.363H138.317V153.336H158.916V138.373H198.737V156.329H228.947V143.348H255.061V147.351H293.503V137.363H360.776V131.378H444.512V153.336H456.88V141.366H524.153V167.963H550.227V124.382H577.679V145.368H598.279V130.368H646.331V160.332H679.298V147.351H683.434V124.382Z'
								fill='#945835'
							/>
							<path
								d='M680.353 95.0536H687.124V94.8291C684.894 94.9039 682.623 94.9788 680.353 95.0536Z'
								fill='#A37458'
							/>
							<path
								d='M639.477 66.1001H617.499V79.0806H639.477V66.1001Z'
								fill='#7F4D2E'
							/>
							<path
								d='M421.196 66.1001H399.218V79.0806H421.196V66.1001Z'
								fill='#7F4D2E'
							/>
							<path
								d='M305.87 66.1001H283.892V79.0806H305.87V66.1001Z'
								fill='#7F4D2E'
							/>
							<path
								d='M213.538 116.526H195.331V129.507H213.538V116.526Z'
								fill='#7F4D2E'
							/>
							<path
								d='M254.372 126.701H236.165V139.682H254.372V126.701Z'
								fill='#7F4D2E'
							/>
							<path
								d='M365.358 108.708H347.151V121.689H365.358V108.708Z'
								fill='#7F4D2E'
							/>
							<path
								d='M347.395 127.861H329.188V140.842H347.395V127.861Z'
								fill='#7F4D2E'
							/>
							<path
								d='M415.356 112.897H397.149V125.878H415.356V112.897Z'
								fill='#7F4D2E'
							/>
							<path
								d='M470.261 116.526H452.054V129.507H470.261V116.526Z'
								fill='#7F4D2E'
							/>
							<path
								d='M501.161 123.035H482.954V136.015H501.161V123.035Z'
								fill='#7F4D2E'
							/>
							<path
								d='M544.062 106.389H525.855V119.369H544.062V106.389Z'
								fill='#7F4D2E'
							/>
							<path
								d='M591.263 110.878H573.056V123.859H591.263V110.878Z'
								fill='#7F4D2E'
							/>
							<path
								d='M664.498 106.389H646.291V119.369H664.498V106.389Z'
								fill='#7F4D2E'
							/>
							<path
								d='M678.446 129.543H660.239V142.524H678.446V129.543Z'
								fill='#7F4D2E'
							/>
							<path
								d='M635.706 123.035H617.499V136.015H635.706V123.035Z'
								fill='#7F4D2E'
							/>
							<path
								d='M556.958 144.17H538.751V157.151H556.958V144.17Z'
								fill='#7F4D2E'
							/>
							<path
								d='M177.123 129.543H158.916V142.524H177.123V129.543Z'
								fill='#7F4D2E'
							/>
							<path
								d='M113.986 130.479H95.7788V143.46H113.986V130.479Z'
								fill='#7F4D2E'
							/>
							<path
								d='M81.9517 103.546H63.7446V116.526H81.9517V103.546Z'
								fill='#7F4D2E'
							/>
							<path
								d='M34.3467 122.025H16.1396V135.005H34.3467V122.025Z'
								fill='#7F4D2E'
							/>
							<path
								d='M211.104 66.1001H189.126V79.0806H211.104V66.1001Z'
								fill='#7F4D2E'
							/>
							<path
								d='M487.089 71.9355H465.111V84.9161H487.089V71.9355Z'
								fill='#7F4D2E'
							/>
							<path
								d='M558.864 71.5991H536.886V84.5797H558.864V71.5991Z'
								fill='#7F4D2E'
							/>
							<path
								d='M105.39 71.5991H83.4116V84.5797H105.39V71.5991Z'
								fill='#7F4D2E'
							/>
							<path
								d='M189.166 72.6094H167.188V85.5899H189.166V72.6094Z'
								fill='#50903B'
							/>
							<path
								d='M254.372 71.9355H232.394V84.9161H254.372V71.9355Z'
								fill='#50903B'
							/>
							<path
								d='M340.176 75.3398H318.198V88.3204H340.176V75.3398Z'
								fill='#50903B'
							/>
							<path
								d='M384.781 71.9355H362.803V84.9161H384.781V71.9355Z'
								fill='#50903B'
							/>
							<path
								d='M465.111 75.3398H443.133V88.3204H465.111V75.3398Z'
								fill='#50903B'
							/>
							<path
								d='M525.856 75.3398H503.877V88.3204H525.856V75.3398Z'
								fill='#50903B'
							/>
							<path
								d='M593.169 75.3398H571.19V88.3204H593.169V75.3398Z'
								fill='#50903B'
							/>
							<path
								d='M674.148 67.5957H652.169V80.5762H674.148V67.5957Z'
								fill='#50903B'
							/>
							<path
								d='M143.143 75.3398H121.165V88.3204H143.143V75.3398Z'
								fill='#50903B'
							/>
							<path
								d='M57.3376 71.5991H35.3594V84.5797H57.3376V71.5991Z'
								fill='#50903B'
							/>
						</svg>

						<svg
							viewBox='0 0 708 126'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`${s.Grass} ${s.Grass_Tablet}`}
							preserveAspectRatio='none'
						>
							<path d='M708 0H0V58.3909H708V0Z' fill='#62AE4A' />
							<path
								d='M687.719 15.2292V24.2318H673.982V33.2064H642.321V40.6946H612.042V27.9619H598.264V24.2318H570.749V19.7445H545.997V30.9627H533.601V47.4255H519.823V30.9627H497.835V15.9864H482.676V36.9645H433.132V16.7436H387.734V31.72H362.982V39.2081H331.321V29.4763H320.307V33.9636H288.646V10.0127H259.749V21.9881H217.074V30.2055H155.175V51.1836H127.659V21.9881H91.853V32.4492H45.073V47.4255H0V58.4193H708V15.2292H687.719Z'
								fill='#50903B'
							/>
							<path d='M708 58.4199H0V125.813H708V58.4199Z' fill='#7F4D2E' />
							<path
								d='M684.996 93.1123H708V86.3813H693.247V65.4033H654.717V77.3787H612.042V58.4199H596.923V74.4059H577.658V80.3796H552.866V74.4059H515.718V83.3805H479.952V58.4199H473.043V72.8914H430.409V88.625H378.101V76.6495H343.677V69.8906H332.703V93.1123H294.174V78.136H274.909V89.3822H240.484V76.6495H208.823V66.1605H196.468V74.4059H185.454V86.3813H162.043V74.4059H131.764V89.3822H108.395V69.8906H64.3378V78.136H27.1901V91.6259H0V105.088H32.6769V125.785H50.6005V98.3568H76.7339V111.819H95.9986V102.844H138.633V114.82H159.28V103.601H199.191V117.063H229.47V107.331H255.644V110.332H294.174V102.844H361.6V98.3568H445.528V114.82H457.924V105.845H525.351V125.785H551.484V93.1123H578.999V108.846H599.646V97.5996H647.808V120.064H680.85V110.332H684.996V93.1123Z'
								fill='#945835'
							/>
						</svg>

						<svg
							viewBox='0 0 328 126'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={`${s.Grass} ${s.Grass_Mobile}`}
							preserveAspectRatio='none'
						>
							<path d='M328 0H0V58.3909H328V0Z' fill='#62AE4A' />
							<path
								d='M318.604 15.2292V24.2318H312.24V33.2064H297.572V40.6946H283.545V27.9619H277.162V24.2318H264.415V19.7445H252.948V30.9627H247.205V47.4255H240.822V30.9627H230.636V15.9864H223.612V36.9645H200.66V16.7436H179.628V31.72H168.161V39.2081H153.493V29.4763H148.391V33.9636H133.723V10.0127H120.336V21.9881H100.565V30.2055H71.8889V51.1836H59.1417V21.9881H42.5534V32.4492H20.8813V47.4255H0V58.4193H328V15.2292H318.604Z'
								fill='#50903B'
							/>
							<path d='M328 58.4199H0V125.813H328V58.4199Z' fill='#7F4D2E' />
							<path
								d='M317.343 93.1123H328V86.3813H321.165V65.4033H303.315V77.3787H283.545V58.4199H276.541V74.4059H267.616V80.3796H256.13V74.4059H238.92V83.3805H222.351V58.4199H219.15V72.8914H199.398V88.625H175.166V76.6495H159.217V69.8906H154.134V93.1123H136.284V78.136H127.359V89.3822H111.411V76.6495H96.7431V66.1605H91.0191V74.4059H85.9164V86.3813H75.071V74.4059H61.0434V89.3822H50.2168V69.8906H29.8062V78.136H12.5966V91.6259H0V105.088H15.1385V125.785H23.442V98.3568H35.549V111.819H44.4739V102.844H64.2255V114.82H73.7906V103.601H92.2806V117.063H106.308V107.331H118.434V110.332H136.284V102.844H167.521V98.3568H206.403V114.82H212.146V105.845H243.383V125.785H255.49V93.1123H268.237V108.846H277.802V97.5996H300.114V120.064H315.422V110.332H317.343V93.1123Z'
								fill='#945835'
							/>
							<path
								d='M315.912 71.1234H319.057V70.9551C318.021 71.0112 316.967 71.0673 315.912 71.1234Z'
								fill='#A37458'
							/>
							<path
								d='M296.932 49.4165H286.727V59.1483H296.932V49.4165Z'
								fill='#7F4D2E'
							/>
							<path
								d='M195.577 49.4165H185.371V59.1483H195.577V49.4165Z'
								fill='#7F4D2E'
							/>
							<path
								d='M142.026 49.4165H131.821V59.1483H142.026V49.4165Z'
								fill='#7F4D2E'
							/>
							<path
								d='M99.1532 87.2222H90.699V96.954H99.1532V87.2222Z'
								fill='#7F4D2E'
							/>
							<path
								d='M118.114 94.8506H109.66V104.582H118.114V94.8506Z'
								fill='#7F4D2E'
							/>
							<path
								d='M169.649 81.3608H161.195V91.0926H169.649V81.3608Z'
								fill='#7F4D2E'
							/>
							<path
								d='M161.308 95.7202H152.854V105.452H161.308V95.7202Z'
								fill='#7F4D2E'
							/>
							<path
								d='M192.865 84.5015H184.411V94.2333H192.865V84.5015Z'
								fill='#7F4D2E'
							/>
							<path
								d='M218.359 87.2222H209.905V96.954H218.359V87.2222Z'
								fill='#7F4D2E'
							/>
							<path
								d='M232.707 92.1016H224.253V101.833H232.707V92.1016Z'
								fill='#7F4D2E'
							/>
							<path
								d='M252.628 79.6216H244.174V89.3534H252.628V79.6216Z'
								fill='#7F4D2E'
							/>
							<path
								d='M274.544 82.9873H266.09V92.7191H274.544V82.9873Z'
								fill='#7F4D2E'
							/>
							<path
								d='M308.55 79.6216H300.096V89.3534H308.55V79.6216Z'
								fill='#7F4D2E'
							/>
							<path
								d='M315.027 96.9814H306.573V106.713H315.027V96.9814Z'
								fill='#7F4D2E'
							/>
							<path
								d='M295.181 92.1016H286.727V101.833H295.181V92.1016Z'
								fill='#7F4D2E'
							/>
							<path
								d='M258.615 107.948H250.161V117.68H258.615V107.948Z'
								fill='#7F4D2E'
							/>
							<path
								d='M82.2445 96.9814H73.7903V106.713H82.2445V96.9814Z'
								fill='#7F4D2E'
							/>
							<path
								d='M52.9276 97.6831H44.4734V107.415H52.9276V97.6831Z'
								fill='#7F4D2E'
							/>
							<path
								d='M38.0528 77.4907H29.5986V87.2225H38.0528V77.4907Z'
								fill='#7F4D2E'
							/>
							<path
								d='M15.9483 91.3447H7.49414V101.077H15.9483V91.3447Z'
								fill='#7F4D2E'
							/>
							<path
								d='M98.0229 49.4165H87.8176V59.1483H98.0229V49.4165Z'
								fill='#7F4D2E'
							/>
							<path
								d='M226.173 53.7915H215.968V63.5233H226.173V53.7915Z'
								fill='#7F4D2E'
							/>
							<path
								d='M259.5 53.5391H249.295V63.2709H259.5V53.5391Z'
								fill='#7F4D2E'
							/>
							<path
								d='M48.9362 53.5391H38.731V63.2709H48.9362V53.5391Z'
								fill='#7F4D2E'
							/>
							<path
								d='M87.8369 54.2969H77.6316V64.0287H87.8369V54.2969Z'
								fill='#50903B'
							/>
							<path
								d='M118.114 53.7915H107.909V63.5233H118.114V53.7915Z'
								fill='#50903B'
							/>
							<path
								d='M157.956 56.3438H147.751V66.0756H157.956V56.3438Z'
								fill='#50903B'
							/>
							<path
								d='M178.668 53.7915H168.462V63.5233H178.668V53.7915Z'
								fill='#50903B'
							/>
							<path
								d='M215.967 56.3438H205.762V66.0756H215.967V56.3438Z'
								fill='#50903B'
							/>
							<path
								d='M244.174 56.3438H233.968V66.0756H244.174V56.3438Z'
								fill='#50903B'
							/>
							<path
								d='M275.429 56.3438H265.224V66.0756H275.429V56.3438Z'
								fill='#50903B'
							/>
							<path
								d='M313.031 50.5376H302.826V60.2694H313.031V50.5376Z'
								fill='#50903B'
							/>
							<path
								d='M66.4663 56.3438H56.261V66.0756H66.4663V56.3438Z'
								fill='#50903B'
							/>
							<path
								d='M26.624 53.5391H16.4187V63.2709H26.624V53.5391Z'
								fill='#50903B'
							/>
						</svg>
					</div>
				</div>
			</BaseContainer>
		</div>
	);
};

export default Services;
