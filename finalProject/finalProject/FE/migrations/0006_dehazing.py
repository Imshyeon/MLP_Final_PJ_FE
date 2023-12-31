# Generated by Django 4.2.7 on 2023-11-17 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FE', '0005_profile_git_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='dehazing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('original_image', models.ImageField(upload_to='before_fog/')),
                ('processed_image', models.ImageField(blank=True, null=True, upload_to='after_fog/')),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
