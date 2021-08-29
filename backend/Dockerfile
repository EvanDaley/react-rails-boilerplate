FROM ruby:3.0.2-alpine3.13

ENV APP_HOME /backend
ENV NOKOGIRI_USE_SYSTEM_LIBRARIES 1
ENV RAILS_ENV production
ENV RACK_ENV production

EXPOSE 3000

WORKDIR $APP_HOME

RUN gem install bundler

RUN apk add libpq libxml2 libxslt xz
RUN apk add --virtual .bundle-deps libxml2-dev libxslt-dev xz-dev postgresql-dev build-base git

COPY Gemfile Gemfile.lock ./

RUN bundle config set without 'development test'
RUN bundle install --jobs 20 --retry 5

RUN apk del .bundle-deps

RUN rm -rf /var/cache/apk/*

COPY . .

ENTRYPOINT ["bundle", "exec"]

CMD ["puma", "-C", "config/puma.rb", "-v"]
