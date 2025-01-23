import { test, expect } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:4200/')
})

test('Navigate to Form page', async ({ page }) => {
	const navigateTo = new NavigationPage(page)
	await navigateTo.formLayoutsPage()
	await navigateTo.datePickerPage()
	await navigateTo.smartTablePage()
	await navigateTo.toastrPage()
	await navigateTo.tooltipPage()
})

test('Parameterized methods', async ({ page }) => {
	const navigateTo = new NavigationPage(page)
	const onFormLayoutsPage = new FormLayoutsPage(page)
	const onDatepickerPage = new DatepickerPage(page)

	await navigateTo.formLayoutsPage()
	await onFormLayoutsPage.submitUsingGridForm('test@test.com', 'Welcome1', 'Option 2')
	await onFormLayoutsPage.submitInlineForm('John Smith', 'john@test.com', true)

	await navigateTo.datePickerPage()
	await onDatepickerPage.selectCommonDatePickerDateFromToday(5)
	await onDatepickerPage.selectDatePickerWithRangeFromToday(2, 5)
})
