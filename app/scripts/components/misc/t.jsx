import isUndefined from 'lodash/lang/isUndefined';
import isFunction from 'lodash/lang/isFunction';
import isArray from 'lodash/lang/isArray';
import React from 'react';
import warn from '../../utils/warn';
import { connect } from 'reflux';
import langStore from '../../stores/lang';


const allTranslations = {
  'en': {
    'site-name': 'Health Dashboard',
    'site.flag': 'Flag of Tanzania',

    'home.health': 'Health Facilities',
    'home.title': 'Track performance, explore data and provide feedback using this Health Dashboard.',
    'home.text': 'This Health Dashboard visualizes key information from Tanzania\'s open data portal. Use it to view the latest national exam results and monitor the information that is important to you. You can also use the menu options above to see original data and speak out about missing or wrong data.',

    'nav.home': 'Home',
    'nav.data': 'Data',
    'nav.speak-out': 'Speak Out',
    'nav.edudash': 'Education Dashboard',
    'nav.waterdash': 'Water Dashboard',
    'data.external.govopendataportal': 'Government Open Data Portal',

    'static.data-title': 'Explore the data behind the dashboard.',
    'static.data-content': 'This Health Dashboard was built on open data release by the government of Tanzania. The raw data is published on the Government\'s open data portal in machine-readable format with a license that encourages re-use. The data behind this education dashboard comes from Ministry of Health and Social Welfare.',
    'static.speakout-title': 'Your voice matters!',
    'static.speakout-content': 'Complete this form to share feedback about the data.',

    'lang.en': 'English',
    'lang.sw-tz': 'Kiswahili',

    'filters.title': 'Dashboard Filters',

    'filters.population-served.unit': 'Number of people',
    'filters.filter-two': 'Filter Two',
    'filters.filter-three': 'Filter Three',
    'filter.year': 'Years',
    'filter.year.2012': '2012',
    'filter.year.2013': '2013',
    'filter.year.2014': '2014',
    'filter.metric.TOTAL FAMILY PLANNING CLIENTS': 'Total Family Planning Clients',
    'filter.metric.NEW CLIENTS': 'New Clients',
    'filter.metric.FAMILY PLANNING CONTINUIOUS': 'Family Planning Continuious',
    'filter.metric.PROJECTED FAMILY PLANNING CLIENTS (WOMEN AGE 15-49)': 'Projected Family Planning Clients',
    'filter.metric.TOTAL': 'Total',
    'filter.metric.HEALTH FACILITY DELIVERIES': 'Health Facility Deliveries',
    'filter.metric.TRADITIONAL BIRTH ATTENDANTS (TBA)': 'Traditional Birth Attendants (tba)',
    'filter.metric.ANTENATAL CARE PROJECTION': 'Antenatal Care Projection',
    'filter.metric.BORN BEFORE ARRIVAL (BBA)': 'Born Before Arrival (bba)',
    'filter.metric.HOME DELIVERY': 'Home Delivery',
    'filter.metric.PROJECTED CLIENTS': 'Projected Clients',
    'filter.metric.TOTAL ATTENDANCE': 'Total Attendance',
    'filter.metric.TT2 VACCINATION COVERAGE': 'TT2 Vaccination Coverage',
    'filter.metric.% TT2 VACCINATION COVERAGE': '% TT2 Vaccination Coverage',
    'search.help-field': 'SEARCH FACILITY BY NAME',
    'search.help': 'Type 2 letters to start search',

    'legend.title': 'legend',
    'legend.lessthan50': '< 50',
    'legend.greaterhan50': '> 50',
    'legend.greaterhan75': '> 75',
    'legend.nodata': 'No Data',
    'legend.dispensary': 'Dispensary',
    'legend.hospital': 'Hospital',
    'legend.health-center': 'Health Center',
    'legend.clinic': 'Clinic',
    'legend.subtitle.facilities': 'Number of Facilities',
    'legend.subtitle.death': 'Number of Deaths',
    'legend.subtitle.family-planning': 'Number of Family Planning',
    'legend.subtitle.deliveries': 'Number of Deliveries',
    'legend.subtitle.health-workers': 'Number of Health Workers',
    'legend.subtitle.ipd': 'Number of patients in IPD',
    'legend.subtitle.opd': 'Number of patients in OPD',
    'legend.subtitle.tetanous': '% Tetanus Vaccination Coverage',
    'legend.subtitle.hiv-center': 'Number of HIV Centers',

    'dash.regions': 'Regions',
    'dash.districts': 'Districts',
    'dash.wards': 'Wards',
    'dash.points': 'Facilities',

    'charts.toggle.closed': 'View Charts',
    'charts.toggle.opened': 'Hide Charts',

    'filters.toggle.closed': 'Dashboard Filters',
    'filters.toggle.opened': 'Hide Filters',

    'popup.close': 'Close popup',

    'view-mode.points.waterpoints': 'All Waterpoints',
    'view-mode.points.dams': 'All Dams',
    'view-mode.points.boreholes': 'All Boreholes',
    'view-mode.points': i => `All ${i[0]}`,
    'view-mode.region': 'Region',
    'view-mode.district': 'District',
    'view-mode.ward': 'Ward',
    'view-mode.dashview': 'Dashboard Views',
    'view-mode.facilityfilters': 'Filter Facility Types',
    'view-mode.disabled': 'Data not available',

    'data-type.death': 'Deaths',
    'data-type.family-planning': 'Family Planning',
    'data-type.deliveries': 'Deliveries',
    'data-type.health-workers': 'Health Workers',
    'data-type.ipd': 'IPD (In Patient Department)',
    'data-type.opd': 'OPD (Out Patient Department)',
    'data-type.tetanous': 'Tetanus',
    'data-type.hiv-center': 'HIV Centers',
    'data-type.facilities': 'Health Facilities',
    'data-type.others': 'Other Selections',

    'chart.click': 'Click',
    'chart.click.here': 'here',
    'chart.data-helptext': ' to learn more about the data. ',
    'chart.health-facilities.title': 'Number and types of facilities',
    'chart.health-facilities.helptextdesctiption': 'Click on a facility type to toggle its visibility on the chart. Click on the name below a bar to drill down. Click on a color in a bar to drill down and see only facilities of that type.',
    'chart.health-facilities.x-axis': 'Regions',
    'chart.health-facilities.y-axis': 'Facilities',
    'chart.facilities-ownership-piechart.title': 'Health Facilities Ownership',
    'chart.facilities-type-piechart.title': 'Health Facilities Type',
    'chart.population-facilities.title': 'Population to Facilities Ratio',
    'chart.population-facilities.series': 'Population to Facilities ratio',
    'chart.facilities.title': 'All Facilities',
    'chart.facilities.type.DISPENSARY': 'Dispensary',
    'chart.facilities.type.HEALTH CENTRE': 'Health Centre',
    'chart.facilities.type.CLINIC': 'Clinic',
    'chart.facilities.type.HOSPITAL': 'Hospital',
    'chart.hiv-facilities.title': 'Number of HIV Facilities',
    'chart.hiv-facilities.helptext': ' By Region',
    'chart.hiv-facilities.x-axis': 'Regions',
    'chart.hiv-facilities.y-axis': 'Facilities',
    'chart.hiv.title': 'HIV/AIDS Care & Treatment Center',
    'chart.hiv-region.title': 'Average Center per Region',
    'chart.hiv-people.title': 'People to HIV/AIDS Care & Treatment Center Ratio',
    'chart.death.title': 'Number of Deaths',
    'chart.death.helptext': 'Click on an age group to toggle its visibility.',
    'chart.death-by-desease.title': 'Causes of Death',
    'chart.death-by-desease.helptext': 'Sorted by age of deceased.',
    'chart.death.x-axis': 'Year',
    'chart.death.y-axis': 'Death',
    'chart.deaths.title': 'Total Number of Deaths',
    'chart.deaths-avg.title': 'Average of Deaths by Region',
    'chart.death-deseases.title': 'Top 5 Disease Causes of Death',
    'metric.summary-list.MALARIA- SEVERE, COMPLICATED': 'Malaria',
    'metric.summary-list.MALARIA- SEVERE COMPLICATED': 'Malaria',
    'metric.summary-list.MALARIA- UNCOMPLICATED': 'Malaria Uncomplicated',
    'metric.summary-list.PNEUMONIA': 'Pneumonia',
    'metric.summary-list.OTHERS': 'Others',
    'metric.summary-list.HIV/AIDS': 'HIV/AIDS',
    'metric.summary-list.ANAEMIA': 'Anemia',

    'chart.deliveries-barchart.title': 'Deliveries by Type',
    'chart.deliveries-barchart.helptext': 'Click on a delivery type to toggle its visibility.',
    'chart.deliveries-barchart.x-axis': 'Year',
    'chart.deliveries-barchart.y-axis': 'Deliveries',
    'chart.deliveries-average.title': 'Average Deliveries by Region',
    'chart.deliveries-TOTAL.title': 'Total Number of Deliveries',
    'chart.deliveries-HEALTH FACILITY DELIVERIES.title': 'Total of Health Facility Deliveries',
    'chart.deliveries-TRADITIONAL BIRTH ATTENDANTS (TBA).title': 'Traditional Birth Attendants',
    'chart.deliveries-ANTENATAL CARE PROJECTION.title': 'Total Antenatal Care Protection',
    'chart.deliveries-BORN BEFORE ARRIVAL (BBA).title': 'Total Born Before Arrival',
    'chart.deliveries-HOME DELIVERY.title': 'Total Home Deliveries',

    'chart.family-planning-FAMILY PLANNING CONTINUIOUS.title': 'Total Family Planning Continuious',
    'chart.family-planning-TOTAL FAMILY PLANNING CLIENTS.title': 'Total Family Planning Clients',
    'chart.family-planning-NEW CLIENTS.title': 'New Clients',
    'chart.family-planning-PROJECTED FAMILY PLANNING CLIENTS (WOMEN AGE 15-49).title': 'Projected Family Planning Clients',
    'chart.family-barchart.title': 'New vs Continuous Family Planning Clients',
    'chart.family-barchart.helptext': 'Click on a type to toggle its visibility.',
    'chart.family-barchart.x-axis': 'Year',
    'chart.family-barchart.y-axis': '# of client',
    'chart.family-areachart.title': 'Family Planning Clients Over Time',
    'chart.family-areachart.helptext': 'Click on a category to toggle its visibility',
    'chart.workers.title': 'Total Number of Health Workers',
    'chart.workers-avg.title': 'Number of Workers per Region',
    'chart.workers-people.title': 'Population to Health Workers ratio',
    'chart.health-worker.title': 'Number of Heath Workers',
    'chart.health-worker.x-axis': 'Year',
    'chart.health-worker.y-axis': '# workers',
    'chart.worker-by-type.title': 'Types of Heath Workers',
    'chart.worker-by-type.helptext': 'Mouse over a category to see the number of workers.',
    'chart.ipd.title': 'Total Number of Inpatient Department',
    'chart.ipd-region.title': 'Average IPD per Region',
    'chart.ipd-ABOVE 5 YEARS.title': 'IPD above 5 Years',
    'chart.ipd-UNDER 5 YEARS.title': 'IPD under 5 Years',
    'chart.ipd-by-age-chart.title': 'Number of Inpatient  Department Cases',
    'chart.ipd-by-age-chart.helptext': 'Click on an age group to toggle its visibility.',
    'chart.ipd-by-desease.title': 'Types of Inpatient Department Cases',
    'chart.ipd-by-desease.helptext': 'Mouse over a category to see the number of cases.',
    'chart.opd-by-desease.title': 'Types of Outpatient Department Cases',
    'chart.opd-by-desease.helptext': 'Mouse over a category to see the number of cases.',
    'chart.ipd-by-age-chart.x-axis': 'Year',
    'chart.ipd-by-age-chart.y-axis': 'IPD',
    'chart.opd.title': 'Total Number of Out Patient Department',
    'chart.opd-region.title': 'Average OPD per Region',
    'chart.opd-by-age-chart.title': 'Number of Outpatient Cases',
    'chart.opd-by-age-chart.helptext': 'Click on an age group to toggle its visibility.',
    'chart.opd-ABOVE 5 YEARS.title': 'OPD above 5 Years',
    'chart.opd-UNDER 5 YEARS.title': 'OPD under 5 Years',
    'chart.opd-by-age-chart.x-axis': 'Year',
    'chart.opd-by-age-chart.y-axis': 'OPD',
    'chart.tetanus-TT2 VACCINATION COVERAGE.title': 'Tetanus Vaccination Coverage',
    'chart.tetanus-TOTAL ATTENDANCE.title': 'Total Attendance',
    'chart.tetanus-% TT2 VACCINATION COVERAGE.title': '% Vaccination Coverage',
    'chart.tetanus-PROJECTED CLIENTS.title': 'Projected Clients',
    'chart.tetanus-barchart.title': 'Tetanus Coverage',
    'chart.tetanus-barchart.helptext': ' By Region',
    'chart.tetanus-barchart.x-axis': 'Year',
    'chart.tetanus-barchart.y-axis': 'People',
    'chart.tetanus-plan-chart.title': 'Tetanus Plan',
    'chart.tetanus-plan-chart.helptext': ' By Year',

    'overview-bar': 'Overview stuff',

    'footer.copy': ' The source code of this website is published under a GPL 3.0 license . Visitors are encouraged to examine and re-use the code as long as they publish it under a similar license.',

    'loading': 'Loading',
    'loading.data.death': 'Loading Death Stats',
    'loading.data.family-planning': 'Loading Family Planning Stats',
    'loading.data.deliveries': 'Loading Deliveries Stats',
    'loading.data.health-workers': 'Loading Health Workers Stats',
    'loading.data.ipd': 'Loading IPD',
    'loading.data.opd': 'Loading OPD',
    'loading.data.tetanous': 'Loading Tetanus Stats',
    'loading.data.hiv-center': 'Loading HIV Centers',
    'loading.data.facilities': 'Loading Health Facilities',

    'loading.regions': 'Loading regions...',
    'loading.districts': 'Loading districts...',
    'loading.wards': 'Loading wards...',
    'loading.points': 'If you see this message, there is likely an error in the application.',

    'drilldown.regions': 'Region',
    'drilldown.districts': 'District',
    'drilldown.wards': 'Ward',
    'drilldown.points': 'Point',
    'drilldown.back': 'Back To National',

    'flyout.id': 'Facility ID',
    'flyout.facility-name': 'Facility Name',
    'flyout.rating': 'Rating',
    'flyout.common-name': 'Common Name',
    'flyout.type': 'Type',
    'flyout.ownership': 'Ownership',
    'flyout.status': 'Status',
    'flyout.location': 'Lat/Lon',
    'flyout.council': 'Council',
    'flyout.zone': 'Zone',
    'flyout.region': 'Region',
    'flyout.facilities.length': 'Number of Facilities',
    'flyout.facilities.pupulation': 'People to Facility Ratio',
    'flyout.facilities.status': 'Status',
    'flyout.facilities.OPERATING': 'Operating',
    'flyout.facilities.ownership': 'Ownership',
    'flyout.facilities.FAITH BASED ORGANIZATION': 'Faith Based Organization',
    'flyout.facilities.PUBLIC': 'Public',
    'flyout.facilities.PRIVATE': 'Private',
    'flyout.facilities.PARASTATAL': 'Parastatal',
    'flyout.facilities.type': 'Type',
    'flyout.facilities.DISPENSARY': 'Dispensary',
    'flyout.facilities.HEALTH CENTRE': 'Health Centers',
    'flyout.facilities.HOSPITAL': 'Hospital',
    'flyout.facilities.CLINIC': 'Clinic',
    'flyout.hiv.length': 'Number of HIV/AIDS Care & Treatment Center',
    'flyout.death.length': 'Number of death',
    'flyout.family.total': 'Total Family Planning Clients',
    'flyout.family.new-clients': 'New Clients',
    'flyout.family.continuious': 'Family Planning Continuous',
    'flyout.family.projected': 'Projected Family Planning Clients',
    'flyout.deliveries.total': 'Total Deliveries',
    'flyout.deliveries.health-facilities-deliveries': 'Health Facility Deliveries',
    'flyout.deliveries.traditional': 'Traditional Birth Attendants (Tba)',
    'flyout.deliveries.antenatal-care': 'Antenatal Care Projection',
    'flyout.deliveries.bba': 'Born Before Arrival (Bba)',
    'flyout.deliveries.home': 'Home Delivery',
    'flyout.workers.length': 'Number of workers',
    'flyout.workers.densities': 'Workers Patients Densities',
    'flyout.worker.population.ratio': 'People to Workers Ratio',
    'flyout.ipd.length': 'Number of IPD',
    'flyout.opd.length': 'Number of OPD',
    'flyout.tetanus.projected': 'Projected Clients',
    'flyout.tetanus.total': 'Total Attendance',
    'flyout.tetanus.tt2-coverage': 'TT2 Vaccination Coverage',
    'flyout.tetanus.perc-tt2-coverage': '% TT2 Vaccination Coverage',
    'flyout.population': 'Population',

    'right-panel.button.back': 'Back to Facilities',
    'right-panel.loading': 'Loading Facility',
    'right-panel.not-found': 'Missing Data',
    'right-panel.filter': 'Filter Facility Types',

    'share.share': 'Share',
    'share.feedback': 'Feedback',
    'share.print': 'PDF',

    'error': 'We\'re sorry',
    'error.retry': 'Retry',
    'error.api.pre-request': 'An error occurred when the application was preparing to fetch data',
    'error.api.http': 'A network error occurred while trying to fetch data',
    'error.api.http.not-ok': 'A server error occurred while trying to fetch data',
    'error.api.ckan': 'The CKAN data server encountered an error while trying to fetch data',
    'error.api.ckan.unknown-field-type': i => `The CKAN data server returned data of an unknown type '${i[0]}' for field '${i[1]}'`,
    'error.api.ckan.record-missing-field': i => `A record from the CKAN data server was missing the field '${i[0]}'`,
    'error.api.postprocess': 'An error occurred while the application was processing data',
    'error.api.static.postprocess': 'An error occurred while the application was procesing boundary data',
  },
  'sw-tz': {
    'site-name': 'Dashibodi ya Afya',
    'site.flag': 'Flag of Tanzania',
    'home.health': 'Vituo vya matibabu',
    'home.title': 'Tazama data katika sekta ya afya ; chunguza na utupe maoni zaidi ukitumia Dashibodi hii ya Afya.',
    'home.text': 'Dashibodi hii ya elimu ni tovuti ya takwimu huria zinazoorodhesha matokeo ya mitihani ya kitaifa ya hivi karibuni na habari muhimu kwako. Tumia orodha iliyo juu kutazama takwimu asili data na wasiliana nasi kuhusu takwimu zisizokuwepo au zenye makosa.',

    'nav.home': 'Mwanzo',
    'nav.data': 'Data',
    'nav.speak-out': 'Maoni',
    'nav.edudash': 'Dashibody ya Elimu',
    'nav.waterdash': 'Dashibody ya Maji',
    'data.external.govopendataportal': 'Government Open Data Portal',


    'static.data-title': 'Chunguza data ya dashibodi.',
    'static.data-content': 'Tovuti hii imechapishwa kwa leseni ya GPL 3.0. Wageni wa tovuti wanahamasishwa kuangalia programu kwa makini na kuitumia kama watachapisha programu zao kwa leseni inayolingana.',
    'static.speakout-title': 'Sauti yako ni ya maana!',
    'static.speakout-content': 'Jaza fomu hii utupe maoni yako kuhusu takwimu zilizopo.',

    'lang.en': 'English',
    'lang.sw-tz': 'Kiswahili',

    'filters.title': 'Kichujio cha Dashibodi',
    'filters.filter-two': 'Kichujio 2',
    'filters.filter-three': 'Kichujio 3',
    'filter.year': 'Mwaka',
    'filter.year.2012': '2012',
    'filter.year.2013': '2013',
    'filter.year.2014': '2014',

    'filter.metric.TOTAL FAMILY PLANNING CLIENTS': 'Total Family Planning Clients',
    'filter.metric.NEW CLIENTS': 'New Clients',
    'filter.metric.FAMILY PLANNING CONTINUIOUS': 'Family Planning Continuious',
    'filter.metric.PROJECTED FAMILY PLANNING CLIENTS (WOMEN AGE 15-49)': 'Projected Family Planning Clients',
    'filter.metric.TOTAL': 'Total',
    'filter.metric.HEALTH FACILITY DELIVERIES': 'Health Facility Deliveries',
    'filter.metric.TRADITIONAL BIRTH ATTENDANTS (TBA)': 'Traditional Birth Attendants (tba)',
    'filter.metric.ANTENATAL CARE PROJECTION': 'Antenatal Care Projection',
    'filter.metric.BORN BEFORE ARRIVAL (BBA)': 'Born Before Arrival (bba)',
    'filter.metric.HOME DELIVERY': 'Home Delivery',
    'filter.metric.PROJECTED CLIENTS': 'Projected Clients',
    'filter.metric.TOTAL ATTENDANCE': 'Total Attendance',
    'filter.metric.TT2 VACCINATION COVERAGE': 'TT2 Vaccination Coverage',
    'filter.metric.% TT2 VACCINATION COVERAGE': '% TT2 Vaccination Coverage',
    'search.help-field': 'SEARCH FACILITY BY NAME',
    'search.help': 'Weka tarakimu 2 za kwanza',

    'legend.title': 'Vialamishi vya data',
    'legend.lessthan50': '< 50',
    'legend.greaterhan50': '> 50',
    'legend.greaterhan75': '> 75',
    'legend.nodata': 'Takwimu kukosa',
    'legend.dispensary': 'Zahanati',
    'legend.hospital': 'Hospitali',
    'legend.health-center': 'Vituo vya matibabu',
    'legend.clinic': 'Kliniki',
    'legend.subtitle.facilities': 'Idadi ya wateja wa kupanga uzazi',
    'legend.subtitle.death': 'Idadi ya Sababu za vifo',
    'legend.subtitle.family-planning': 'Idadi ya Kupanga uzazi',
    'legend.subtitle.deliveries': 'Idadi ya Wanaojifungua',
    'legend.subtitle.health-workers': 'Idadi ya wafanya kazi wa sekta ya afya',
    'legend.subtitle.ipd': 'Idadi ya wagonjwa wa idara ya ndani',
    'legend.subtitle.opd': 'Idadi ya wagonjwa wa idara ya nje',
    'legend.subtitle.tetanous': '% Asilimia ya chanjo ya pepopunda',
    'legend.subtitle.hiv-center': 'Vituo vya matibabu ya virusi vya UKIMWI',

    'dash.regions': 'Mikoa',
    'dash.districts': 'Wilaya',
    'dash.wards': 'Kata',

    'charts.toggle.closed': 'Tazama Chati',
    'charts.toggle.opened': 'Ficha Chati',

    'filters.toggle.closed': 'Kichujio cha Dashibodi',
    'filters.toggle.opened': 'Ficha Kichujio cha Dashibodi',

    'popup.close': 'Ondoka',

    'view-mode.region': 'Mkoa',
    'view-mode.district': 'Wilaya',
    'view-mode.ward': 'Kata',
    'view-mode.dashview': 'Mtazamo wa Dashibodi',
    'view-mode.facilityfilters': 'Kichujio cha aina ya kituo',
    'view-mode.disabled': 'Data haipo',

    'data-type.death': 'Sababu za vifo',
    'data-type.family-planning': 'Kupanga uzazi',
    'data-type.deliveries': 'Wanaojifungua',
    'data-type.health-workers': 'Health Workers',
    'data-type.ipd': 'IPD: Idara ya wagonjwa wa ndani',
    'data-type.opd': 'OPD: Idara ya wagonjwa wa nje',
    'data-type.tetanous': 'Chanjo ya pepopunda',
    'data-type.hiv-center': 'HIV Centers',
    'data-type.facilities': 'Vituo vya matibabu ya virusi vya UKIMWI',
    'data-type.others': 'Chagua Zinginezo',

    'chart.click': 'Bonyeza',
    'chart.click.here': 'hapa',
    'chart.data-helptext': ' kujifunza zaidi kuhusu data. ',
    'chart.health-facilities.title': 'Idadi na aina za vituo vya matibabu',
    'chart.health-facilities.helptextdesctiption': 'Bonyeza jina chini ya chati kuchunguza zaidi. Bonyeza rangi katika chati ili ku chunguza aina za vituo vya matibabu vinavyoambatana.',
    'chart.health-facilities.x-axis': 'Mikoa',
    'chart.health-facilities.y-axis': 'Vituo vya matibabu',
    'chart.facilities-ownership-piechart.title': 'Umiliki wa vituo vya matibabu',
    'chart.facilities-type-piechart.title': 'Aina ya vituo vya matibabu',
    'chart.population-facilities.title': 'Uwiano wa idadi ya watu kwa vituo vya matibabu ',
    'chart.population-facilities.series': 'Uwiano wa idadi ya watu kwa idadi ya vituo vya matibabu',
    'chart.facilities.title': 'Vituo vyote',
    'chart.facilities.type.DISPENSARY': 'Zahanati',
    'chart.facilities.type.HEALTH CENTRE': 'Vituo vya matibabu',
    'chart.facilities.type.CLINIC': 'Kliniki',
    'chart.facilities.type.HOSPITAL': 'Hospitali',
    'chart.hiv-facilities.title': 'Idadi ya vituo vya matibabu ya virusi vya Ukimwi',
    'chart.hiv-facilities.helptext': ' Kwa Mkoa',
    'chart.hiv-facilities.x-axis': 'Mkoa',
    'chart.hiv-facilities.y-axis': 'Vituo vya matibabu',
    'chart.hiv.title': 'HIV/AIDS Care & Treatment Center',
    'chart.hiv-region.title': 'Vituo Wastani katika Mkoa',
    'chart.hiv-people.title': 'Idadi ya watu kwa Vituo vya matibabu ya virusi vya UKIMWI',
    'chart.death.title': 'Idadi ya vifo',
    'chart.death.helptext': ' Bonyeza rika la umri ili kuonyesha au kuficha data kwenye chati.',
    'chart.death-by-desease.title': 'Sababu za vifo',
    'chart.death-by-desease.helptext': 'Takwimu zimeorodheshwa kwa umri wa marehemu.',
    'chart.death.x-axis': 'Mwaka',
    'chart.death.y-axis': 'Kifo',
    'chart.deaths.title': 'Idadi ya vifo',
    'chart.deaths-avg.title': 'Vifo wastani katika Mkoa',
    'chart.death-deseases.title': 'Sababu 5 kuu za vifo',
    'metric.summary-list.MALARIA- SEVERE, COMPLICATED': 'Malaria',
    'metric.summary-list.MALARIA- SEVERE COMPLICATED': 'Malaria',
    'metric.summary-list.MALARIA- UNCOMPLICATED': 'Malaria Uncomplicated',
    'metric.summary-list.PNEUMONIA': 'Nimonia',
    'metric.summary-list.OTHERS': 'Nyinginezo',
    'metric.summary-list.HIV/AIDS': 'HIV/AIDS',
    'metric.summary-list.ANAEMIA': 'Upungufu wa data',

    'chart.deliveries-barchart.title': 'Waliojifungua (aina mbalimbali)',
    'chart.deliveries-barchart.helptext': 'Bonyeza kialamishi ili kuonyesha au kuficha data kwenye chati.',
    'chart.deliveries-barchart.x-axis': 'Year',
    'chart.deliveries-barchart.y-axis': 'Waliojifungua',
    'chart.deliveries-average.title': 'Idadi wastani ya waliojifungua katika Mkoa',
    'chart.deliveries-TOTAL.title': 'Jumla ya waliojifungua',
    'chart.deliveries-HEALTH FACILITY DELIVERIES.title': 'Jumla ya waliojifungua katika kituo cha matibabu',
    'chart.deliveries-TRADITIONAL BIRTH ATTENDANTS (TBA).title': 'Waliojifungua - wakunga wa kiasili',
    'chart.deliveries-ANTENATAL CARE PROJECTION.title': 'Wanaokadiriwa kuhitaji huduma kabla ya Kujifungua ',
    'chart.deliveries-BORN BEFORE ARRIVAL (BBA).title': 'Waliojifungua kabla ya huduma za matibabu',
    'chart.deliveries-HOME DELIVERY.title': 'Jumla ya waliojifungua nyumbani',

    'chart.family-planning-FAMILY PLANNING CONTINUIOUS.title': 'Wateja wanaorejea, wa kupanga uzazi',
    'chart.family-planning-TOTAL FAMILY PLANNING CLIENTS.title': 'Wateja wanaokadiriwa wa kupanga uzazi',
    'chart.family-planning-NEW CLIENTS.title': 'Wateja wapya wa kupanga uzazi',
    'chart.family-planning-PROJECTED FAMILY PLANNING CLIENTS (WOMEN AGE 15-49).title': 'Wateja wanaokadiriwa wa kupanga uzazi',
    'chart.family-barchart.title': 'Wateja wapya na wateja wanaorejea – wa kupanga uzazi',
    'chart.family-barchart.helptext': 'Bonyeza kialamishi ili kuonyesha au kuficha data kwenye chati.',
    'chart.family-barchart.x-axis': 'Mwaka',
    'chart.family-barchart.y-axis': 'Idadi ya wateja',
    'chart.family-areachart.title': 'Wateja wa kupanga uzazi kwa muda',
    'chart.family-areachart.helptext': 'Bonyeza aina ya kialamishi ili kuonyesha au kuficha data kwenye chati.',
    'chart.workers.title': 'Idadi ya wafanyakazi',
    'chart.workers-avg.title': 'Idadi ya wafanyakazi katika Mkoa',
    'chart.workers-people.title': 'Uwiano wa idadi ya watu kwa idadi ya wafanyakazi wa sekta ya afya',
    'chart.health-worker.title': 'Idadi ya wafanyakazi wa afya',
    'chart.health-worker.helptext': ' Kwa Mwaka',
    'chart.health-worker.x-axis': 'Mwaka',
    'chart.health-worker.y-axis': 'Idadi ya wafanyakazi',
    'chart.worker-by-type.title': 'Aina ya wafanyakazi wa afya',
    'chart.worker-by-type.helptext': 'Bonyeza aina ili kutazama idadi ya wafanyakazi.',
    'chart.ipd.title': 'Jumla ya wagonjwa wa Idara ya ndani',
    'chart.ipd-region.title': 'Wastani wa wagonjwa wa idara ya ndani katika mkoa',
    'chart.ipd-ABOVE 5 YEARS.title': 'Idadi ya wagonjwa wenye umri zaidi ya miaka 5 wa Idara ya ndani',
    'chart.ipd-UNDER 5 YEARS.title': 'Idadi ya wagonjwa wenye umri chini ya miaka 5 wa Idara ya ndani',
    'chart.ipd-by-age-chart.title': 'Idadi ya wagonjwa wa idara ya ndani',
    'chart.ipd-by-age-chart.helptext': 'Bonyeza rika la umri ili kuonyesha au kuficha data kwenye chati.',
    'chart.ipd-by-desease.title': 'Aina ya magojwa katika idara ya ndani',
    'chart.ipd-by-desease.helptext': 'Bonyeza rika la umri ili kuonyesha au kuficha data kwenye chati.',
    'chart.opd-by-desease.title': 'Aina ya magojwa katika idara ya nje',
    'chart.opd-by-desease.helptext': 'Bonyeza rika la umri ili kuonyesha au kuficha idadi ya magonjwa',
    'chart.ipd-by-age-chart.x-axis': 'Mwaka',
    'chart.ipd-by-age-chart.y-axis': 'IPD',
    'chart.opd.title': 'Jumla ya wagonjwa wa Idara ya nje',
    'chart.opd-region.title': 'Idadi wastani ya wagonjwa wa Idara ya nje katika mkoa',
    'chart.opd-by-age-chart.title': 'Idadi ya wagonjwa wa idara ya nje',
    'chart.opd-by-age-chart.helptext': 'Bonyeza rika la umri ili kuonyesha au kuficha data kwenye chati',
    'chart.opd-ABOVE 5 YEARS.title': 'Idadi ya wagonjwa wenye umri juu ya miaka 5 wa Idara ya nje',
    'chart.opd-UNDER 5 YEARS.title': 'Idadi ya wagonjwa wenye umri chini ya miaka 5 wa Idara ya nje',
    'chart.opd-by-age-chart.x-axis': 'Mwaka',
    'chart.opd-by-age-chart.y-axis': 'OPD',
    'chart.tetanus-TT2 VACCINATION COVERAGE.title': 'Idadi ya chanjo ya pepopunda',
    'chart.tetanus-TOTAL ATTENDANCE.title': 'Jumla ya walioshiriki',
    'chart.tetanus-% TT2 VACCINATION COVERAGE.title': 'Asilimia ya chanjo ya pepopunda',

    'chart.tetanus-barchart.title': 'Asilimia ya chanjo ya pepopunda',
    'chart.tetanus-barchart.helptext': ' Kwa Mkoa',
    'chart.tetanus-barchart.x-axis': 'Mwaka',
    'chart.tetanus-barchart.y-axis': 'Watu',
    'chart.tetanus-plan-chart.title': 'Mipango juu ya pepopunda',
    'chart.tetanus-plan-chart.helptext': ' Kwa Mwaka',

    'overview-bar': 'Maelezo ya joomla',

    'footer.copy': 'Tovuti hii imechapishwa kwa leseni ya GPL 3.0. Wageni wa tovuti wanahamasishwa kuangalia programu kwa makini na kuitumia kama watachapisha programu zao kwa leseni inayolingana.',

    'loading': 'Loading',
    'loading.data.death': 'Loading Death Stats',
    'loading.data.family-planning': 'Loading Family Planning Stats',
    'loading.data.deliveries': 'Loading Deliveries Stats',
    'loading.data.health-workers': 'Loading Health Workers Stats',
    'loading.data.ipd': 'Loading IPD',
    'loading.data.opd': 'Loading OPD',
    'loading.data.tetanous': 'Loading Tetanus Stats',
    'loading.data.hiv-center': 'Loading HIV Centers',
    'loading.data.facilities': 'Subiri vituo vya matibabu',

    'loading.regions': 'Vuta mikoa...',
    'loading.districts': 'Vuta wilaya...',
    'loading.wards': 'Loading wards...',
    'loading.points': 'If you see this message, there is likely an error in the application.',


    'drilldown.regions': 'Mkoa',
    'drilldown.districts': 'Wilaya',
    'drilldown.wards': 'Kata',
    'drilldown.points': 'Kituo',
    'drilldown.back': 'Rudi kutazama vituo vya matibabu',

    'flyout.id': 'Nambari ya Kituo',
    'flyout.facility-name': 'Jina la Kituo',
    'flyout.rating': 'Rating',
    'flyout.common-name': 'Jina la kawaida',
    'flyout.type': 'Aina',
    'flyout.ownership': 'Umiliki',
    'flyout.status': 'Hali ya kituo',
    'flyout.location': 'Lat/Lon',
    'flyout.council': 'Baraza',
    'flyout.zone': 'Eneo',
    'flyout.region': 'Mkoa',
    'flyout.facilities.length': 'Idadi ya vituo',
    'flyout.facilities.status': 'Hali ya kituo',
    'flyout.facilities.OPERATING': 'Inayofanya kazi',
    'flyout.facilities.ownership': 'Umiliki',
    'flyout.facilities.FAITH BASED ORGANIZATION': 'Shirika la kidini',
    'flyout.facilities.PUBLIC': 'Ya Umma',
    'flyout.facilities.PRIVATE': 'Ya Kibinafsi',
    'flyout.facilities.PARASTATAL': 'Shirika la umma',
    'flyout.facilities.type': 'Type',
    'flyout.facilities.DISPENSARY': 'Zahanati',
    'flyout.facilities.HEALTH CENTRE': 'Vituo vya matibabu',
    'flyout.facilities.HOSPITAL': 'Hospitali',
    'flyout.facilities.CLINIC': 'Kliniki',
    'flyout.hiv.length': 'Vituo vya matibabu ya virusi vya UKIMWI',
    'flyout.death.length': 'Idadi ya vifo',
    'flyout.family.total': 'Jumla ya wateja wa kupanga uzazi',
    'flyout.family.new-clients': 'Wateja wapya wa kupanga uzazi',
    'flyout.family.continuious': 'Wateja wanaorejea, wa kupanga uzazi',
    'flyout.family.projected': 'Wateja wanaokadiriwa wa kupanga uzazi',
    'flyout.deliveries.total': 'Jumla ya waliojifungua',
    'flyout.deliveries.health-facilities-deliveries': 'Waliojifungua katika kituo cha matibabu',
    'flyout.deliveries.traditional': 'Waliojifungua - wakunga wa kiasili',
    'flyout.deliveries.antenatal-care': 'Wanaokadiriwa kuhitaji huduma kabla ya Kujifungua',
    'flyout.deliveries.bba': 'Born Before Arrival (Bba)',
    'flyout.deliveries.home': 'Waliojifungua nyumbani',
    'flyout.workers.length': 'Idadi ya wafanyakazi',
    'flyout.ipd.length': 'Idadi ya Idara za wagonjwa wa ndani',
    'flyout.opd.length': 'Idadi ya Idara za wagonjwa wa nje',
    'flyout.tetanus.projected': 'Wateja waliokadiriwa',
    'flyout.tetanus.total': 'Jumla ya walioshiriki',
    'flyout.tetanus.tt2-coverage': 'Idadi ya chanjo ya pepopunda',
    'flyout.tetanus.perc-tt2-coverage': 'Asilimia ya chanjo ya pepopunda',
    'flyout.population': 'Idadi ya watu',

    'right-panel.button.back': 'Rudi kutazama vituo vya matibabu',
    'right-panel.loading': 'Loading Facility',
    'right-panel.not-found': 'Takwimu kukosa',
    'right-panel.filter': 'Kichujio kutumia aina ya kituo cha matibabu',

    'share.share': 'Shirikisha',
    'share.feedback': 'Maoni',
    'share.print': 'PDF',

    'error': 'We\'re sorry',
    'error.retry': 'Retry',
    'error.api.pre-request': 'An error occurred when the application was preparing to fetch data',
    'error.api.http': 'A network error occurred while trying to fetch data',
    'error.api.http.not-ok': 'A server error occurred while trying to fetch data',
    'error.api.ckan': 'The CKAN data server encountered an error while trying to fetch data',
    'error.api.ckan.unknown-field-type': i => `The CKAN data server returned data of an unknown type '${i[0]}' for field '${i[1]}'`,
    'error.api.ckan.record-missing-field': i => `A record from the CKAN data server was missing the field '${i[0]}'`,
    'error.api.postprocess': 'An error occurred while the application was processing data',
    'error.api.static.postprocess': 'An error occurred while the application was processing boundary data',
  },
};


/**
 * @param {string} lang The language to translate to like 'en'
 * @param {string} k The key for the translation, like 'site.name'
 * @param {array<any>} i Any values to interpolate into the string
 * @returns {string} the translated string, or the key if it's missing
 */
function translate(lang, k, i) {
  const langTranslations = allTranslations[lang];
  if (isUndefined(langTranslations)) {
    // if the language key is bad, quit early
    warn(`missing language ${lang} to translate ${k}`);
    return k;
  }
  let translated = langTranslations[k];
  if (isUndefined(translated)) {
    warn(`missing translation for key: ${k}`);
    translated = k;
  } else if (isFunction(translated)) {
    if (!isArray(i)) {
      warn(`missing expected array for interpolating ${k}, got: ${i}`);
      translated = translated([]);
    } else {
      translated = translated(i);
    }
  }
  return translated;
}


const T = React.createClass({
  propTypes: {
    i: React.PropTypes.array,
    k: React.PropTypes.string.isRequired,
  },
  mixins: [
    connect(langStore, 'lang'),
  ],
  render() {
    const translated = translate(this.state.lang, this.props.k, this.props.i);
    return (
      <span className="t">{translated}</span>
    );
  },
});

export { translate };
export default T;
